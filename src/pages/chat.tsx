import React from 'react'
import { NextPageContext } from 'next'
import { createStore, declareAtom } from '@reatom/core'
import { useAction, useAtom } from '@reatom/react'

import {
  initChat,
  authUrlAtom,
  chatAtom,
  ablyAtom,
} from '~/features/Chat/model'
import { Chat } from '~/features/Chat'
import { createEffectsTracker } from '~/utils'

function ChatPage() {
  const handleInitChat = useAction(initChat)

  // FIXME: replace by `useInit`
  useAtom(React.useMemo(() => declareAtom(($) => ($(chatAtom), null)), []))

  React.useEffect(() => void handleInitChat(), [])

  return <Chat />
}

ChatPage.getInitialProps = async (ctx: NextPageContext) => {
  const store = createStore({
    [authUrlAtom.id]: `http://localhost:3000/api/ably/auth`,
  })
  store.init(chatAtom)

  await createEffectsTracker(store, () => store.dispatch(initChat()))

  const state = store.getState()
  // cleanup initial mock
  delete state[authUrlAtom.id]
  // remove `ably` from `chatAtom` state manualy
  // as it has circular structure
  state[ablyAtom.id] = {
    messages: state[ablyAtom.id].messages,
  }

  return {
    state,
  }
}

export default ChatPage
