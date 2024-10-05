# xml64

`xml64` is a utility package for converting between Base64 encoded strings and XML. This package provides functions to easily encode XML strings into Base64 and decode Base64 strings back into XML.

## Installation

You can install `xml64` using npm or yarn:

```bash
npm install xml64
# or
yarn add xml64
```

## Features

- Convert Base64 encoded strings to XML strings.
- Convert XML strings to Base64 encoded strings.
- Works in both CommonJS and ES Module environments.

## Usage

### CommonJS Example

For Node.js or CommonJS environments:

```js
const { base64ToXml, xmlToBase64 } = require('xml64');

// Convert Base64 to XML
const base64 = "PHhscD5zdHJpbmc8L3hscD4=";
const xmlString = base64ToXml(base64);
console.log(xmlString); // Outputs: "<xml>string</xml>"

// Convert XML to Base64
const xml = "<xml>string</xml>";
const base64Encoded = xmlToBase64(xml);
console.log(base64Encoded); // Outputs: "PHhscD5zdHJpbmc8L3hscD4="
```

### ES Modules Example

For ES Modules environments or modern JavaScript (e.g., in TypeScript):

```js
import { base64ToXml, xmlToBase64 } from 'xml64';

// Convert Base64 to XML
const base64 = "PHhscD5zdHJpbmc8L3hscD4=";
const xmlString = base64ToXml(base64);
console.log(xmlString); // Outputs: "<xml>string</xml>"

// Convert XML to Base64
const xml = "<xml>string</xml>";
const base64Encoded = xmlToBase64(xml);
console.log(base64Encoded); // Outputs: "PHhscD5zdHJpbmc8L3hscD4="
```

## API

### `base64ToXml(base64: string): string`

Converts a Base64 encoded string into an XML string.

- **Parameters:**
  - `base64`: The Base64 encoded string that represents XML data.
- **Returns:** The decoded XML string.

#### Example:

```js
const xmlString = base64ToXml("PHhscD5zdHJpbmc8L3hscD4=");
// Returns: "<xml>string</xml>"
```

## Author

- [Behzad Bakhshayesh](https://github.com/behzadbakhshayesh)

## License

MIT © 2024 Behzad Bakhshayesh
