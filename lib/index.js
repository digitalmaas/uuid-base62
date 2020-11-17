'use strict'

const baseX = require('base-x')
const { ensureLength } = require('./helpers')

// ////////////////////////////////////////////////

const BASE62 = baseX('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
const UUID_LENGTH = 36
const UUID_NO_DASH = UUID_LENGTH - 4
const ID_LENGTH = 22

// ////////////////////////////////////////////////

module.exports = Object.freeze({
  // Convenience
  baseX,
  base62: BASE62,

  encode(input, options) {
    if (!((typeof input === 'string' && input.length === UUID_LENGTH) || Buffer.isBuffer(input))) {
      throw new TypeError('encode input is not a valid uuid')
    }

    options = options || {}
    const encoding = options.encoding || 'hex'
    const base = options.base || BASE62
    const length = options.length === false ? false : options.length || ID_LENGTH
    if (typeof input === 'string') {
      input = Buffer.from(input.replace(/-/g, ''), encoding)
    }

    const output = base.encode(input)
    return length ? ensureLength(output, length) : output
  },

  decode(input, options) {
    if (!(typeof input === 'string' && input.length > 0)) {
      throw new TypeError('decode input is not valid')
    }

    options = options || {}
    const encoding = options.encoding || 'hex'
    const base = options.base || BASE62
    const length = options.length || UUID_NO_DASH
    let decoded = Buffer.from(base.decode(input)).toString(encoding)
    decoded = ensureLength(decoded, length)
    const chars = decoded.split('')
    chars.splice(8, 0, '-')
    chars.splice(13, 0, '-')
    chars.splice(18, 0, '-')
    chars.splice(23, 0, '-')
    return chars.join('')
  }
})
