import React from 'react'
import { declareAtom } from '@reatom/core'
import { useAtom } from '@reatom/react'
import { Auth } from '~/features/Auth'
import { authAtom } from '~/features/Auth/model'

function AuthPage() {
  // FIXME: replace by `useInit`
  useAtom(React.useMemo(() => declareAtom(($) => ($(authAtom), null)), []))

  return <Auth />
}

export default AuthPage
