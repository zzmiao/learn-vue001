const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: 'development', //mode 表示webpack当前的环境以及对不同的环境的配置;development:开发环境
	entry: {
		//文件入口
		main: path.resolve(__dirname, "../src/main.js");
	},
	output: {
		//打包后文件输出的目录
		path: path.resolve(__dirname, "../dist"),
		filename: 'js/[name].[hash:8].js'
	},
	module: {
		rules: [{
			test: /\.js&/,
			exclude: /node_modules/, //加快处理速度
			use: [{
				loader: 'babel-loader'
			}, {
				test: /\.vue$/,
				loader: 'vue-loader'
			}]
		}],
		loaders: [ //loaders在这里
			{
				test: /\.js$/, //针对js文件里可能出现的es6语法转换
				exclude: path.resolve(__dirname, 'node_modules'), //不检测的路径，这里用path改为了绝对路径
				include: path.resolve(__dirname, 'src'), //检测的路径，注意这里是绝对路径，写相对路径会报错。
				loader: 'babel-loader',
				query: {
					presets: ['es2015'] //这个参数可以写在这里，也可以在根目录下建一个.babelrc或者写在package.json里
				}
			},
			{
				test: /\.css$/,
				use: [ //这里写法和上面不太一样，但是效果相同
					{
						loader: 'style-loader'
					}, //效果依然是从右往左，先是postcss-loader
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					}, //这个css-loader写了一个参数，是为了让@import 进来的CSS也同样可以通过postcss-loader
					{
						loader: 'postcss-loader',
						options: {
							plugins: (loader) => [
								require('autoprefixer')({
									broswers: ['last 5 versions']
								}), //这里给插件添加参数
								require('cssnano')()
							]
						}
					}
				]
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!postcss-loader!less-loader' //这里postcss-loader必须放在less和css之间
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!postcss-loader!sass-loader'
			},
			{
				test: /\.(jpg|png|gif|svg$)/, //对于一些图片文件的加载，可以使用file-loader和url-loader
				use: [ //对于CSS中的url可以正常加载没问题，对于组件里的就需要用到require语法
					{ //如果是在根目录index.html那个img的话，那就没办法了，要么转换成背景图片，要么就使用import导入到入口的JS文件里，再用JS方法加上去
						// loader: 'file-loader',
						loader: 'url-loader', //url-loader和file-loader的区别在于，可以指定一个limit参数，小于它就用base-64位编码
						options: {
							limit: 200000,
							// name: 'images/[name].[ext]',
						}
					}
				]
			}
		]
	},
	devServer: {
		host: 'localhost',
		port: 8089,
		hot: true, //热更新
	},
	plugins: [
		new CleanWebpackPlugin(), //清除dist的文件
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
		new Webpack.HotModuleReplacementPlugin(),
		new Webpack.NamedModulesPlugin()
	]
}