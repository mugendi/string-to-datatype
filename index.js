/**
 * Copyright (c) 2023 Anthony Mugendi
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 * 
 * Original code borrowed from https://github.com/yuanqing/stereotype
 */

function str_to_type(val) {
	// anything else other than string....
	if (typeof val !== 'string') return val;

	// is it one of these?
	switch (val) {
		case 'undefined':
			return undefined;
		case 'null':
			return null;
		case 'NaN':
			return NaN;
		case 'Infinity':
			return Infinity;
		case 'true':
			return true;
		case 'false':
			return false;
	}


    let num = parseFloat(val);
	if (!isNaN(num) && isFinite(val)) {
		if (val.toLowerCase().indexOf('0x') === 0) {
			return parseInt(val, 16);
		}
		return num;
	}

	// check if date
	let isDate = !isNaN(Date.parse(val));
	if (isDate) return new Date(val);

	// might it be a json string?
	let isObj, parsedObj;
	try {
		parsedObj = JSON.parse(val);

		isObj = parsedObj ? true : false;
	} catch (error) {}
    // console.log({val,isObj, parsedObj});
	if (isObj) return parsedObj;

	

	return val;
}

module.exports = str_to_type;
