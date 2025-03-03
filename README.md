# typing-json

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

Get types from your JSON data to use in TypeScript.

## Install

```sh
npm i typing-json
yarn add typing-json
pnpm add typing-json
```

## Usage

### CLI

```sh
npx typing-json '{
    "name": "France",
    "capital": "Paris",
    "population": 67364357,
    "area": 551695,
    "currency": "Euro",
    "languages": ["French"],
    "region": "Europe",
    "subregion": "Western Europe",
    "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
}'
```

Result:

```ts
{
  name: string;
  capital: string;
  population: number;
  area: number;
  currency: string;
  languages: Array<string>;
  region: string;
  subregion: string;
  flag: string;
}
```

### Library

[Example](https://json-to-types-tool.web.app)

```ts
import { jsonToTypes } from 'typing-json';

jsonToTypes('{ "name": "France" }').then(data => console.log(data));

/* Result:
{
  name: string;
}
*/
```

## Development

```sh
pnpm run clean

pnpm run tsc

pnpm run test
```
