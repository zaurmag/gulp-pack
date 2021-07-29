const path = require('./path/path.js')
const name = require('../package').name

module.exports = function () {
	$.gulp.task('zip:build', () => {
		const now = new Date()
		const year = now.getFullYear().toString().padStart(2, '0')
		const month = (now.getMonth() + 1).toString().padStart(2, '0')
		const day = now.getDate().toString().padStart(2, '0')
		const hours = now.getHours().toString().padStart(2, '0')
		const minutes = now.getMinutes().toString().padStart(2, '0')

		return $.gulp.src([
			'dist/**',
			'gulp/**',
			'src/**',
			'.gitignore',
			'.babelrc',
			'.eslintrc',
			'.eslintignore',
			'.env',
			'*.js',
			'*.json',
			'*.md',
			'*.yml',
			'!package-lock.json',
			'!zip/**'
		], {
			base: '.',
			dot: true
		})
			.pipe($.plugins.plumber())
			.pipe($.plugins.zip(`${name}_${year}_${month}_${day}_${hours}_${minutes}.zip`))
			.pipe($.gulp.dest(path.path.build.zip))
	})
}
