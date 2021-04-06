import { Store } from '@reatom/core'

export const debounce = <Args extends any[]>(
  fn: (...a: Args) => any,
  ms = 0,
): ((...a: Args) => void) => {
  let timeoutId: any
  return (...a) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...a), ms)
  }
}

export function requestIdleCallback(cb: Function) {
  const resolver =
    // FIXME:
    // @ts-ignore
    globalThis.requestIdleCallback ||
    globalThis.requestAnimationFrame ||
    ((r: Function) => setTimeout(r, 16))

  resolver(cb)
}

export function createEffectsTracker(store: Store, start = () => {}) {
  return new Promise<void>((res) => {
    let effectsCount = 0

    store.subscribe((transaction) => {
      Promise.resolve().then(() => {
        transaction.effectsResult!.forEach((some) => {
          if (some instanceof Promise) {
            effectsCount++

            some.finally(() => --effectsCount === 0 && res())
          }
        })

        if (effectsCount === 0) res()
      })
    })

    start()
  })
}
