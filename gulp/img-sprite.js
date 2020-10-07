let path = require('./path/path.js');
module.exports = function () {
	$.gulp.task('spriteImg:build', (done) => {
		let spriteData =
            $.gulp.src(path.path.src.pngIcons) // путь, откуда берем картинки для спрайта
            // eslint-disable-next-line no-mixed-spaces-and-tabs
            	.pipe($.plugins.changed(path.path.build.img))
            // eslint-disable-next-line no-mixed-spaces-and-tabs
            	.pipe($.plugins.spritesmith({
            		imgName: 'sprite.png',
            		imgPath: '../images/sprite.png',
            		cssName: '_sprite-img.scss',
            		cssFormat: 'scss',
            		algorithm: 'binary-tree',
            		padding: 5,
            	}));

		spriteData.img.pipe($.gulp.dest(path.path.build.img)); // путь, куда сохраняем картинку
		spriteData.css.pipe($.gulp.dest('src/mixins/sass/')); // путь, куда сохраняем стили
		done();
	});
};
