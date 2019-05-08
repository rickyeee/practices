module.exports = function ({ types: t }) {
  return {
    visitor: {
      ImportDeclaration(path) {
				// const id = t.identifier(path.node.specifiers[0].local.name);
				// const declarations = t.variableDeclarator(id, init);
				const node = t.variableDeclaration( // 变量声明
					'var', [t.variableDeclarator(  // 构造 var 标识符
						t.identifier(path.node.specifiers[0].local.name),  // a
						t.callExpression( // 赋值
							t.identifier('require'),
							[ t.stringLiteral(path.node.source.value) ]
						)
					)]
				);
				path.replaceWith(node);
				// console.log(this.key)
        // const name = path.node.name;
        // // reverse the name: JavaScript -> tpircSavaJ
        // path.node.name = name.split("").reverse().join("");
			}
    }
  };
}