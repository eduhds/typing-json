import * as prettier from 'prettier/standalone';
import * as parserTypescript from 'prettier/plugins/typescript';
import * as parserEstree from 'prettier/plugins/estree';

type Input = object | null | undefined | string | number | boolean;
type Output = object | null | undefined | string | number | boolean;

function parseToTypes(input: Input): Output {
  if (input === null || input === undefined) {
    return input;
  }

  if (typeof input === 'object') {
    if (Array.isArray(input)) {
      // []
      // TODO: Analisar todos os items do array, não só o primeiro
      const item = input[0];
      return [parseToTypes(item)];
    }

    // {}
    let output = {};

    Object.entries(input).forEach(item => {
      const [oldkey, value] = item;
      const key = fmtKey(oldkey);
      // @ts-ignore
      output[key] = parseToTypes(value);
    });
    return output;
  }

  return typeof input;
}

function parseToString(input: Output, output = '') {
  if (input === null || input === undefined) {
    output += 'null';
    return output;
  }

  if (typeof input === 'object') {
    if (Array.isArray(input)) {
      const subItem = input[0];
      output += parseToString(subItem);
      return 'Array<' + output + '>';
    }

    if (typeof input === 'object') {
      output += '{';

      Object.entries(input).forEach(item => {
        const [key, value] = item;
        output += `${key}: ${parseToString(value)}\n`;
      });
      output += '}';
      return output;
    }
  }

  output = input as string;

  return output;
}

function fmtKey(key = '') {
  key = String(key).replace(/[-+*|:/\\()&%=?>< ]/g, '');
  if (key.charAt(0).match(/[0-9]/)) key = `_${key}`;
  return key;
}

export async function jsonToTypes(jsonInput = '') {
  if (!jsonInput) return '';

  try {
    const json = JSON.parse(jsonInput);

    const out = parseToTypes(json);
    const outStr = parseToString(out);

    return await prettier.format(outStr, {
      parser: 'typescript',
      plugins: [parserTypescript, parserEstree]
    });
  } catch (error) {
    return String(error);
  }
}

export default jsonToTypes;
