module.exports = {
	path: {
		build: { // Build files
			html: 'dist/',
			style: 'dist/css',
			img: 'dist/images',
			imgFavicons: 'dist/images/favicons',
			js: 'dist/js',
			fonts: 'dist/fonts',
			zip: 'zip',
		},
		src: { // Source files
			pug: 'src/*.pug',
			style: 'src/base/sass/main.sass',
			img: 'src/images/**/*.+(png|jpg|jpeg|gif)',
			imgComp: 'src/components/**/*.+(png|jpg|jpeg|gif)',
			pngIcons: 'src/images/icons/png/*.png',
			svgIcons: 'src/images/icons/svg/*.svg',
			js: 'src/**/*.js',
			fonts: 'src/fonts/*',
			favicon_lg: 'src/images/favicon-lg.png',
			favicon_sm: 'src/images/favicon-sm.png',
			resources: 'src/resources/**/*',
		},
		watch: { // Watch files
			json: 'src/base/data/*.json',
			pug: 'src/**/*.pug',
			style: 'src/**/*',
		},
		clean: {
			all: './dist',
		},
	},
};
