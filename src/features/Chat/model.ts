import { declareAction, declareAtom } from '@reatom/core'

import { fetchAtom } from '~/features/fetch'
import { routerAtom } from '~/features/router'
import { GetMessagesQuery } from '~/graphql/getMessages'
import { requestIdleCallback, sleep } from '~/utils'

export const initChat = declareAction(`chat/initChat`)
export const getMessages = declareAction(`chat/getMessages`)
export const recieveMessages = declareAction<GetMessagesQuery['messages']>(
  `chat/recieveMessages`,
)
export const sendMessage = declareAction<string>(`chat/sendMessage`)

export const isOnlineAtom = declareAtom(true, `chat/isOnline`)

export const messagesAtom = declareAtom(
  new Array<GetMessagesQuery['messages'][number]>(),
  ($, state) => {
    const fetch = $(fetchAtom)
    const router = $(routerAtom)

    $(
      initChat.handleEffect(async (action, store) => {
        while (store.getState(isOnlineAtom)) {
          store.dispatch(getMessages())
          await sleep(1000)
        }
      }),
    )

    $(
      getMessages.handleEffect(async (action, store) => {
        try {
          const messages = await fetch(`/api/messages`).then<
            GetMessagesQuery['messages']
          >((response) => {
            if (response.status === 200) return response.json()
            throw new Error(response.status.toString())
          })
          store.dispatch(recieveMessages(messages))
        } catch (error) {
          router.push(`/auth`)
        }
      }),
    )

    $(recieveMessages.handle((messages) => (state = [...state, ...messages])))

    return state
  },
  `chat/messages`,
)

// export atom with domain name
// thats combine all dependent atoms and handle all needed logic.
// It may be called as "domain" or domain "root" atom.
export const chatAtom = declareAtom(($) => {
  $(isOnlineAtom)
  $(messagesAtom)
  return null
}, `chat/root`)
