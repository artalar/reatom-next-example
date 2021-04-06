import { declareAction, declareAtom } from '@reatom/core'
import type { Types } from 'ably'
import { requestIdleCallback } from '~/utils'

const chatName = `chat`

function castMessage(ably: Types.RealtimePromise, message: Types.Message) {
  const { userName, text } = JSON.parse(message.data)
  return {
    ...message,
    text,
    userName,
    isSelfMessage: message.clientId === ably.auth.clientId,
  }
}

const sucessInit = declareAction<{
  ably: Types.RealtimePromise
  messageHistory: Array<Types.Message>
}>(`chat/sucessInit`)
const receiveMessage = declareAction<Types.Message>(`chat/receiveMessage`)

export const initChat = declareAction(`chat/initChat`)
export const sendMessage = declareAction<string>(`chat/sendMessage`)

export const authUrlAtom = declareAtom(`/api/ably/auth`, `chat/authUrl`)

export const ablyAtom = declareAtom<{
  ably?: Types.RealtimePromise
  messages: Array<
    Types.Message & { text: string; userName: string; isSelfMessage: boolean }
  >
}>(
  { messages: [] },
  ($, state) => {
    const authUrl = $(authUrlAtom)

    $(
      initChat.handleEffect(async (action, store) => {
        if (state.ably) return

        await new Promise(requestIdleCallback)

        const Ably = await import(`ably/promises`)
        const ably = new Ably.Realtime.Promise({ authUrl })
        const chanel = ably.channels.get(chatName)
        const { items: messageHistory } = await chanel.history()

        chanel.subscribe((msg) => store.dispatch(receiveMessage(msg)))

        store.dispatch(sucessInit({ ably, messageHistory }))
      }),
    )

    $(
      sucessInit.handle(({ ably, messageHistory }) => {
        const { messages } = state
        const ids = new Set(messages.map(({ id }) => id))
        const newMessages = messageHistory
          .filter((msg) => ids.has(msg.id) === false)
          // history is ordered from newest
          .reduceRight((acc: typeof messages, msg) => {
            acc.push(castMessage(ably, msg))
            return acc
          }, [])

        state = {
          ably,
          messages: [...messages, ...newMessages],
        }
      }),
    )

    $(
      receiveMessage.handle((msg) => {
        state = {
          ...state,
          messages: [...state.messages, castMessage(state.ably!, msg)],
        }
      }),
    )

    $(
      sendMessage.handleEffect(async ({ payload }, store) => {
        let { ably } = state
        while (!ably) {
          await new Promise(requestIdleCallback)
          ably = store.getState(ablyAtom).ably
        }
        ably.channels.get(chatName).publish({
          name: chatName,
          data: JSON.stringify({ text: payload, userName: `unknown` }),
        })
      }),
    )

    return state
  },
  `chat/ably`,
)

export const messagesAtom = declareAtom(
  ($) => $(ablyAtom).messages,
  `chat/messages`,
)

// export atom with domain name
// thats combine all dependent atoms and handle all needed logic.
// It may be called as "domain" or domain "root" atom.
export const chatAtom = declareAtom(($) => {
  $(ablyAtom)
  $(messagesAtom)
  return null
}, `chat/root`)
