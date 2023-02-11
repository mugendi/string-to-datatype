<!--
 Copyright (c) 2023 Anthony Mugendi

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

# string-to-datatype

This module builds upon the work of [stereotype](https://www.npmjs.com/package/stereotype) and adds typecasting for date and JSON strings.

Using it:

```javascript
let toType = require('string-to-datatype');

// an array of different values
let vals = [
	1,
	'1678',
	JSON.stringify({ this: 'that' }),
	new Date().toISOString(),
	'2023-02-11T13:54:57.939Z',
	'"2023-02-11T13:54:57.939Z"',
	'null',
	null,
	'"null"',
	'undefined',
	true,
	'false',
	{ a: 2 },
	'{b:2}',
	'{"c":2}',
];

for (let val of vals) {
	// cast
	let casted = toType(val);
	// log
	console.log(val, 'cast to', typeof casted, 'type =>', casted);
}
```

The log should look something like below:

![console.log image](https://repository-images.githubusercontent.com/600443496/c9ddb647-733d-4238-9d09-4ebfb910716d)
