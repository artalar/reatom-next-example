import { declareAtom } from '@reatom/core'
import { Router } from 'next/router'

export const routerAtom = declareAtom(($, state = (null as any) as Router) => {
  if (!state) {
    throw new Error(`You should specify router by store initialization`)
  }

  return state
}, `router/root`)
