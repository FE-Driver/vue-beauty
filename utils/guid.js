let seed = 0

export function guid () {
  return Date.now() + '_' + (seed++)
}
