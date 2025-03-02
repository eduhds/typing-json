#!/usr/bin/env node

const path = require('path');
const { jsonToTypes } = require(path.join(__dirname, '../lib/cjs/index.js'));

const args = process.argv.slice(2);

if (!args.length) {
  console.log('Usage: typing-json <json string>');
  process.exit(1);
}

const json = args[0];
const types = jsonToTypes(json);

console.log(types);
