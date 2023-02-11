/**
 * Copyright (c) 2023 Anthony Mugendi
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

let caster = require('.');

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
	let casted = caster(val);
    // log
	console.log(val, 'cast to', typeof casted, 'type =>', casted);
}
