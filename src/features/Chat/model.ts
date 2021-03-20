import { declareAction, declareAtom } from '@reatom/core'
import type { Types } from 'ably'

export const initChat = declareAction()
export const sendMessage = declareAction<string>()
const receiveMessage = declareAction<Types.Message>()

const chat = declareAtom<null | {
  ably: Types.RealtimePromise
  channel: Types.RealtimeChannelPromise
  messages: Array<Types.Message>
}>(
  null,
  ($, state, update) => {
    $(
      initChat.handle(() => async (store) => {
        if (state) return

        const Ably = await import('ably/promises')
        const ably = new Ably.Realtime.Promise({
          authUrl: '/api/createTokenRequest',
        })
        const channel = ably.channels.get('chat')

        channel.subscribe((msg) => store.dispatch(receiveMessage(msg)))

        store.dispatch(update({ ably, channel, messages: [] }))
      }),
    )

    $(
      receiveMessage.handle(
        (msg) =>
          state &&
          (state = {
            ...state,
            messages: [...state.messages, msg],
          }),
      ),
    )

    $(
      sendMessage.handle((data) => (store) =>
        state?.channel.publish({ name: 'chat', data }),
      ),
    )

    return state
  },
  { displayName: 'chat' },
)

export const messages = declareAtom(($) => {
  const chatData = $(chat)

  if (!chatData) return []

  return (
    chatData.messages.map((msg) => ({
      ...msg,
      isSelfMessage: msg.connectionId === chatData.ably.connection.id,
    })) ?? []
  )
})
