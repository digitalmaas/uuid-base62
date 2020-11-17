@digitalmaas/uuid-base62
========================

[![NPM version][version-badge]][npm-url]
[![NPM downloads][downloads-badge]][npm-url]
[![digitalmaas][dmaas-badge]][dmaas-url]
[![xojs][xojs-badge]][xojs-url]

> A Base62 UUID Encoder and Decoder.


Overview
--------
This library makes it easy to translate UUIDs to and from base62 format. The default behaviour also ensures the Base62 UUID will be 22 characters long.


Instalation
-----------
```shell
npm i --save @digitalmaas/uuid-base62
```


Usage
-----
```javascript
const uuidBase62 = require('@digitalmaas/uuid-base62')

const b62uuid = '2qY9COoAhfMrsH7mCyh86T'
uuidBase62.decode(b62uuid)
// 9af099b2-6244-4fc1-b72b-1d69a24481b7

uuidBase62.encode('8fc60e7c-3b3c-48e9-a6a7-a5fe4f1fbc31')
// 2fNwVYePN8WqqDFvVf7XMN
```

That's it. It also supports custom alphabets; e.g base64:
```javascript
const base64urlsafe = uuidBase62.baseX('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_')
const uuidBase62.encode('72be7291-fbf6-400f-87c4-455e23d01cd5', { base })
// 1OLDah-_p03Uv4hlUzQ1Pl
```

For more examples check the [tests](./index.tests.js).


License
-------
MIT License.

This project has been forked from the original [uuid-base62][original-project], modified and published under a different name, as the original has been abandoned.

For the complete information, please refer to the [license](./LICENSE) file.


[version-badge]: https://img.shields.io/npm/v/@digitalmaas/uuid-base62.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/@digitalmaas/uuid-base62.svg?style=flat-square
[xojs-badge]: https://img.shields.io/badge/code_style-xo-brightgreen.svg?style=flat-square
[dmaas-badge]: https://img.shields.io/badge/sponsored%20by-digitalmaas-green.svg?colorB=00CD98&style=flat-square
[npm-url]: https://www.npmjs.com/package/@digitalmaas/uuid-base62
[dmaas-url]: https://digitalmaas.com/
[xojs-url]: https://github.com/xojs/xo#readme
[original-project]: https://github.com/dmarcelino/uuid-base62
