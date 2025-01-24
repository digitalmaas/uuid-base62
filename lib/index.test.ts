import { describe, it } from 'node:test'
import assert from 'node:assert';

import * as uuidBase62 from './index.js'

describe('uuid-base62', function () {
  //
  describe('encode / decode', function () {
    //
    const fixtures = {
      '0000000000000000000000': '00000000-0000-0000-0000-000000000000',
      '0cBaidlJ84Ggc5JA7IYCgv': '06ad547f-fe02-477b-9473-f7977e4d5e17',
      '4vqyd6OoARXqj9nRUNhtLQ': '941532a0-6be1-443a-a9d5-d57bdf180a52',
      '5FY8KwTsQaUJ2KzHJGetfE': 'ba86b8f0-6fdf-4944-87a0-8a491a19490e',
      '7N42dgm5tFLK9N8MT7fHC7': 'ffffffff-ffff-ffff-ffff-ffffffffffff'
    }

    Object.entries(fixtures).forEach(function ([key, value]) {
      it('should properly encode ' + value, function () {
        assert.equal(uuidBase62.encode(value), key)
      })
      it('should properly decode ' + key, function () {
        assert.equal(uuidBase62.decode(key), value)
      })
    })

    it('should properly encode/decode with a different encoding', function () {
      const expectations = {
        '06ad547f-fe02-477b-9473-f7977e4d5e17': uuidBase62.decode(
          'bqP6JWAS4t1lWczmmHbPIhwMSO27BW1qKdDPx2mTN5l',
          { encoding: 'ascii' }
        ),
        bqP6JWAS4t1lWczmmHbPIhwMSO27BW1qKdDPx2mTN5l: uuidBase62.encode(
          '06ad547f-fe02-477b-9473-f7977e4d5e17',
          { encoding: 'ascii' }
        )
      }
      for (const [result, input] of Object.entries(expectations)) {
        assert.equal(input, result)
      }
    })
    //
  })

  describe('other bases', function () {
    //
    it('should accept a custom base as an option', function () {
      const customBase = uuidBase62.baseX(
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'
      )
      const uuid = '72be7291-fbf6-400f-87c4-455e23d01cd5'

      const uuidB64 = uuidBase62.encode(uuid, { base: customBase })
      assert.equal(uuidB64, '1OLDah-_p03Uv4hlUzQ1Pl')

      const result = uuidBase62.decode(uuidB64, { base: customBase })
      assert.equal(result, uuid)
    })

    it('should encode and decode a uuid in Base64', function () {
      const base = uuidBase62.baseX(
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'
      )
      const uuid = '72be7291-fbf6-400f-87c4-455e23d01cd5'

      const uuidB64 = uuidBase62.encode(uuid, { base })
      assert.equal(uuidB64, '1OLDah-_p03Uv4hlUzQ1Pl')

      const result = uuidBase62.decode(uuidB64, { base })
      assert.equal(result, uuid)
    })
    //
  })
  //
})
