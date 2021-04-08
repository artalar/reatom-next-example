import { createStore, Store } from '@reatom/core'

// http://extension.remotedev.io/docs/API/Methods.html#connect
export function connectReduxDevtools(
  store: Store,
  replaceStore = (store: Store) => {},
  config = {},
) {
  const { connect } = (globalThis as any).__REDUX_DEVTOOLS_EXTENSION__ ?? {}

  if (typeof connect !== 'function') {
    console.warn(`Trying to use redux devtools without extension`)
    return
  }

  const devTools = connect(config)
  let state = store.getState()

  devTools.init(state)

  devTools.subscribe((action: any) => {
    // if (action.type === 'DISPATCH') {
    //   replaceStore((store = createStore(JSON.parse(action.state))))
    //   subscribe()
    // }
  })

  function subscribe() {
    store.subscribe((transaction) => {
      // if (action.type === init.type) return
      const diff = [...transaction.patch].reduce<Record<string, any>>(
        (acc, [{ id }, { state }]) => ((acc[id] = state), acc),
        {},
      )

      state = Object.assign({}, state, diff)

      transaction.actions.forEach((action) => devTools.send(action, state))
    })
  }

  return subscribe()
}
