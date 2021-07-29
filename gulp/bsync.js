module.exports = function () {
	$.gulp.task('bsync', () => {
		$.browserSync.init({
			server: {
				baseDir: './dist'
			},
			notify: false
			// online: false, // Work offline without internet connection
			// tunnel: true, tunnel: 'zaurmag', // Demonstration page: http://projectname.localtunnel.me
		})
	})
}
