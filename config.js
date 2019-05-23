module.exports = {
	dirname: __dirname,
	appname: '$_appname',
	localStaticDomain: '//localhost:8000',
	publicStaticDomain: '//gh.bdstatic.com',
	/**
	 * 分离
	 * commons 是否需要提取公共文件（2次以上引入，仅限js）优先级低于libs
	 * vendors 是否需要提取node_modules中的模块（包含css） 优先级低于commons
	 * libs
	 */
	cacheGroups: 'vendors',
	libs: [], // 需要额外打包的公共库
	uglifyJs: true, // js压缩开关 开发模式下无效
	optimizeCSS: true, // js压缩开关 开发模式下无效
	supportFileType: ['less'], // 需要支持的文件格式
	globalPath: {}
}