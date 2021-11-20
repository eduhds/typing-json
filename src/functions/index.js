import prettier from 'prettier/standalone';
import parser from 'prettier/parser-typescript';

export function convertJsonToTypes(jsonInput = '') {
	if (!jsonInput) return '';

	try {
		const json = JSON.parse(jsonInput);

		const out = parseToTypes(json, {});
		const outStr = 'type Root = ' + parseToString(out);

		return prettier.format(outStr, { parser: 'typescript', plugins: [parser] });
	} catch (error) {
		return String(error);
	}
}

function parseToTypes(input, output = {}) {
	if (input === null || undefined) {
		output = null;
	} else if (Array.isArray(input)) {
		// []
		const item = input[0];
		if (item === null || item === undefined) {
			output = [];
		} else if (typeof item === 'object') {
			output = [parseToTypes(item, {})];
		} else {
			output = [typeof item];
		}
	} else if (typeof input === 'object') {
		// {}
		Object.entries(input).forEach(item => {
			const [key, value] = item;

			if (value === null || value === undefined) {
				output[key] = null;
			} else if (typeof value === 'object') {
				output[key] = parseToTypes(value, {});
			} else {
				output[key] = typeof value;
			}
		});
	}
	return output;
}

function parseToString(input, output = '') {
	if (input === null || input === undefined) {
		output += 'any | null';
	} else if (Array.isArray(input)) {
		const subItem = input[0];

		if (subItem === null || subItem === undefined) {
			output += `Array<any>;`;
		} else if (typeof subItem === 'object') {
			output += parseToString(subItem);
		} else {
			output += `Array<${subItem}>;`;
		}
	} else if (typeof input === 'object') {
		output += '{';
		Object.entries(input).forEach(item => {
			const [key, value] = item;

			if (value === null || value === undefined) {
				output += `${key}?: any|null;`;
			} else if (typeof value === 'object') {
				output += `${key}: ${parseToString(value)}`;
			} else {
				output += `${key}: ${value};`;
			}
		});
		output += '};';
	} else {
		output = input;
	}
	return output;
}
