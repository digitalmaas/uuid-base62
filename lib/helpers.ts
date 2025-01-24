export function trimLeft(target, length) {
  target = String(target)
  let trim = 0
  // prettier-ignore
  while (target[trim] === '0' && (target.length - trim) > length) trim++;
  return target.slice(trim)
}

export function ensureLength(target, length) {
  target = String(target)
  if (target.length < length) {
    return target.padStart(length, '0')
  }
  if (target.length > length) {
    return trimLeft(target, length)
  }
  return target
}
