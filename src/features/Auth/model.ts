import { declareAction, declareAtom } from '@reatom/core'

import { fetchAtom } from '~/features/fetch'
import { routerAtom } from '~/features/router'

// One of the way to manage atoms value (implicit)
// is use property action `update`.
// But this property is public only for _plain_ atoms
// which was created without callback handler (computer).
export const nameAtom = declareAtom('', `auth/name`)
export const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  nameAtom.update(e.currentTarget.value)

export const passwordAtom = declareAtom('', `auth/password`)
export const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  passwordAtom.update(e.currentTarget.value)

export const onSubmit = declareAction<React.FormEvent<HTMLFormElement>>(
  `auth/onSubmit`,
)

// export atom with domain name
// thats combine all dependent atoms and handle all needed logic.
// It may be called as "domain" or domain "root" atom.
export const authAtom = declareAtom(($, state = null) => {
  const router = $(routerAtom)
  const name = $(nameAtom)
  const password = $(passwordAtom)

  $(
    onSubmit.handleEffect(async (action, { dispatch }) => {
      action.payload.preventDefault()

      const fetch = $(fetchAtom)

      const { status } = await fetch(
        `/api/auth?username=${name}&password=${password}`,
      )

      if (status === 200) router.push(`/chat`)
      else alert(status)
    }),
  )

  return state
}, `auth/root`)
