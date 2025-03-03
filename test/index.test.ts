import { jsonToTypes } from '../src';

test('Should return number', async () => {
  expect(await jsonToTypes('1')).toEqual('number;\n');
});

test('Should return string', async () => {
  expect(await jsonToTypes('"hello"')).toEqual('string;\n');
  expect(await jsonToTypes('"1"')).toEqual('string;\n');
});

test('Should return null', async () => {
  expect(await jsonToTypes('null')).toEqual('null;\n');
});

test('Should return Object Type', async () => {
  expect(await jsonToTypes('{}')).toEqual('{\n}\n');
});

test('Should return Array Type', async () => {
  expect(await jsonToTypes('[]')).toEqual('Array<null>;\n');
});

test('Should return Simple Object', async () => {
  expect(await jsonToTypes('{"hello": "world"}')).toEqual(`{
  hello: string;
}
`);
});

test('Should return Array of numbers', async () => {
  expect(await jsonToTypes('[1, 2, 3]')).toEqual(`Array<number>;
`);
});

test('Should return nested Object', async () => {
  const example = `{
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}`;

  expect(await jsonToTypes(example)).toEqual(`{
  glossary: {
    title: string;
    GlossDiv: {
      title: string;
      GlossList: {
        GlossEntry: {
          ID: string;
          SortAs: string;
          GlossTerm: string;
          Acronym: string;
          Abbrev: string;
          GlossDef: {
            para: string;
            GlossSeeAlso: Array<string>;
          }
          GlossSee: string;
        }
      }
    }
  }
}
`);
});
