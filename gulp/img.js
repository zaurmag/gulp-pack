let path = require('./path/path.js');
module.exports = function () {
	$.gulp.task('img:build', (done) => {
		console.log(process.env.TINYPNG_KEY_API);

		return $.gulp.src([path.path.src.img, path.path.src.imgComp])
			.pipe($.plugins.changed(path.path.build.img))
			.pipe($.plugins.plumber())
			// .pipe($.plugins.tinypng(process.env.TINYPNG_KEY_API))
			.pipe($.plugins.webp()) // Options: https://github.com/imagemin/imagemin-webp#imageminwebpoptions
			.pipe($.gulp.dest(path.path.build.img));
		done();
	});
};
