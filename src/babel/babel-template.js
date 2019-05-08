const template = require('@babel/template').default;
const generate = require('@babel/generator').default;
const t =require('@babel/types');

// get template
const buildRequire = template(`
	var IMPORT_NAME = require(SOURCE);
	var TEST = 1;
`);

// render
const ast = buildRequire({
  IMPORT_NAME: t.identifier("myModule"),
  TEST: t.identifier("test"),
  SOURCE: t.stringLiteral("my-module")
});

console.log(ast)
// get code
console.log(generate(ast).code);
