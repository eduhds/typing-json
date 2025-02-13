#!/usr/bin/env node

const { jsonToTypes } = require('../lib/cjs/index.js');

const args = process.argv.slice(2);

if (!args.length) {
  console.log('Usage: json-to-types <json>');
  process.exit(1);
}

const json = args[0];
const types = jsonToTypes(json);

console.log(types);
