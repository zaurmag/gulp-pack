let path = require('./path/path.js')
let fs = require('fs')
module.exports = function () {
	$.gulp.task('pug:build', () => {
		return $.gulp.src(path.path.src.pug)
			.pipe($.plugins.plumber())
			.pipe($.plugins.data(() => { // Парсим JSON
				return JSON.parse(fs.readFileSync('./src/base/data/data.json', 'utf8'))
			}))
			.pipe($.plugins.pug({
				pretty: !$.yargs.minifyHtml
			}))
			.pipe($.gulp.dest(path.path.build.root))
			.on('end', $.browserSync.reload)
	})
}
