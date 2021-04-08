import React from 'react'
import { NextPageContext } from 'next'
import fetch, { Response } from 'cross-fetch'
import { createStore, declareAtom } from '@reatom/core'
import { useAction, useAtom } from '@reatom/react'

import { fetchAtom } from '~/features/fetch'
import { initChat, chatAtom, isOnlineAtom } from '~/features/Chat/model'
import { Chat } from '~/features/Chat'
import { createEffectsTracker } from '~/utils'
import { getMessages } from './api/messages'
import { routerAtom } from '~/features/router'

function ChatPage() {
  const handleInitChat = useAction(initChat)

  // FIXME: replace by `useInit`
  useAtom(React.useMemo(() => declareAtom(($) => ($(chatAtom), null)), []))

  React.useEffect(() => void handleInitChat(), [])

  return <Chat />
}

ChatPage.getInitialProps = async (ctx: NextPageContext) => {
  const store = createStore({
    [fetchAtom.id]: async (...a: any[]) => {
      if (a[0] === `/api/messages`) {
        // FIXME:
        // @ts-expect-error
        const { session } = ctx.req?.cookies ?? {}
        return new Response(JSON.stringify(await getMessages(session)))
      }
      // @ts-expect-error
      return fetch(...a)
    },
    // [routerAtom.id]: new Router()
  })
  store.init(chatAtom)

  await createEffectsTracker(store, () => {
    store.dispatch(initChat())
    setTimeout(() => store.dispatch(isOnlineAtom.update(false)))
  })

  const state = store.getState()
  // cleanup initial mock
  delete state[fetchAtom.id]

  return {
    state,
  }
}

export default ChatPage
