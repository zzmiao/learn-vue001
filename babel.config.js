module.exports = {
	presets: [
		[
			"@babel/env",
			{
				useBuiltIns: "usage",//按需加载@babel/polyfill
			}
		]
	]
};