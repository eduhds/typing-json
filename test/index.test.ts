import { jsonToTypes } from '../src';

test('Should return Object Type', () => {
  expect(jsonToTypes('{}')).toEqual(`type Root = {};
`);
});

test('Should return Array Type', () => {
  expect(jsonToTypes('[]')).toEqual(`type Root = Array<any>;
`);
});

test('Should return Simple Object', () => {
  expect(jsonToTypes('{"hello": "world"}')).toEqual(`type Root = { hello: string };
`);
});

/* FIXME: Returning number
test('Should return Array of numbers', () => {
  expect(jsonToTypes('[1, 2, 3]')).toEqual(`type Root = Array<number>;
`);
}); */

test('Should return nested Object', () => {
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
  expect(jsonToTypes(example)).toEqual(`type Root = {
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
          GlossDef: { para: string; GlossSeeAlso: Array<string> };
          GlossSee: string;
        };
      };
    };
  };
};
`);
});
