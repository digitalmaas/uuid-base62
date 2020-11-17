'use strict'

function trimLeft(string, length) {
  string = String(string)
  let trim = 0
  // prettier-ignore
  while (string[trim] === '0' && (string.length - trim) > length) trim++;
  return string.slice(trim)
}

function ensureLength(string, length) {
  string = String(string)
  if (string.length < length) {
    return string.padStart(length, '0')
  }

  if (string.length > length) {
    return trimLeft(string, length)
  }

  return string
}

module.exports = {
  ensureLength,
  trimLeft
}
