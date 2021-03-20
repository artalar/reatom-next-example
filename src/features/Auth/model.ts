import { declareAtom } from '@reatom/core'

export const login = declareAtom('', { displayName: 'login' })
export const password = declareAtom('', { displayName: 'password' })
export const setLogin = (e: React.ChangeEvent<HTMLInputElement>) =>
  login.update(e.currentTarget!.value)
export const setPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
  password.update(e.currentTarget.value)

export const submit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  location.pathname = '/chat'
  return [login.update(''), password.update('')]
}
