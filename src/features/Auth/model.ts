import { declareAction, declareAtom } from '@reatom/core'
import { routerAtom } from '../router'

// One of the way to manage atoms value (implicit)
// is use property action `update`.
// But this property is public only for _plain_ atoms
// which was created without callback handler.
export const nameAtom = declareAtom('', `auth/name`)
export const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  nameAtom.update(e.currentTarget.value)

export const onSubmit = declareAction<React.FormEvent<HTMLFormElement>>(
  `auth/onSubmit`,
)

// export atom with domain name
// thats combine all dependent atoms and handle all needed logic.
// It may be called as "domain" or domain "root" atom.
export const authAtom = declareAtom(($, state = null) => {
  const name = $(nameAtom)
  const router = $(routerAtom)

  $(onSubmit.handle((e) => e.preventDefault()))
  $(
    onSubmit.handleEffect(async (action, { dispatch }) => {
      await fetch(`/api/auth?username=${name}`)
      router.push(`/chat`)
      dispatch(nameAtom.update(''))
    }),
  )

  return state
}, `auth/root`)
