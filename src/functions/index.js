export function convertJsonToTypes(jsonInput = '') {
	if (!jsonInput) return '';

	try {
		const json = JSON.parse(jsonInput);
		let types = '';

		switch (typeof json) {
			case 'object':
				if (typeof json === 'object' && json.length > 0) {
					types = 'type Root = Array<';
					types += array(json);
					types += '>;';
				} else if (typeof json === 'object' && json.length === 0) {
					types = 'type Root = Array<any>;';
				} else if (typeof json === 'object' && Object.keys(json).length === 0) {
					types = 'type Root = any;';
				} else {
					types = 'type Root = {\n  ';
					types += object(json);
					types += '\n};';
				}
				break;
			default:
				types = 'Invalid JSON';
				break;
		}

		return types;
	} catch (error) {
		return String(error);
	}
}

function object(value = {}, types = '') {
	const objEntries = Object.entries(value);
	objEntries.forEach(([key, val], index) => {
		if (val === null || val === undefined) {
			types += `${key}?: any;`;
		} else if (typeof val === 'object' && val.length > 0) {
			types += `${key}: Array<`;
			types += array(val, '');
			types += '>;';
		} else if (typeof val === 'object' && val.length === 0) {
			types += `${key}: Array<any>;`;
		} else if (typeof val === 'object' && Object.keys(val).length === 0) {
			types += `${key}: any;`;
		} else if (typeof val === 'object') {
			types += `${key}: {\n  `;
			types += object(val, '');
			types += '\n  }';
		} else {
			types += `${key}: ${typeof val};`;
		}
		if (index + 1 < objEntries.length) types += '\n  ';
	});
	return types;
}

function array(value = [], types = '') {
	const item = value[0];
	if (item === null || item === undefined) {
		types += `?: any;`;
	} else if (typeof item === 'object' && item.length) {
		types += 'Array<';
		types += array(item[0], '');
		types += '>';
	} else if (typeof item === 'object') {
		types += '{\n  ';
		types += object(item, '');
		types += '\n  }';
	} else {
		types += `${typeof item}`;
	}

	return types;
}
