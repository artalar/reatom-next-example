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
