const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ejs = require('ejs');

// 动态引入html模板 start

// 这个是同步操作
function getEjsHtml(filePath, data = {}, options = {}) {
	let res = '';
	ejs.renderFile(
		path.resolve(__dirname, filePath),
		data,
		options,
		function(err, str){
		// str => Rendered HTML string
		console.log(err)
			if(err) return res = err.message;
			res = str;
		}
	);
	return res;
}


// 动态引入html模板 end

module.exports = {
	mode: 'development',
	entry: {
		index: './index.js',
		main: './src/main.ts'
	},
	output: {
		publicPath: '/',
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		libraryTarget:'umd' // 打包成umd模块
	},
	target: 'node', // 打包成node模块,自带global对象；不写则为浏览器模块，自带window对象
	resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
	module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
					}
				}
			},
			{
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader'
      }
    ]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			footerHtml: getEjsHtml('common/footer.ejs', {user: {name: 'this is userName'}}),
			headerHtml: getEjsHtml('common/header.ejs', {}),
			title: 'hahahha',
      inject: true
		})
	]
};
