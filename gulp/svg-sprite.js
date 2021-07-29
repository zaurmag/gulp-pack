const path = require('./path/path.js')

module.exports = function () {
	$.gulp.task('spriteSvg:build', () => {
		return $.gulp.src(path.path.src.svgIcons)
			.pipe($.plugins.plumber())
			.pipe($.plugins.cheerio({
				run($) {
					$('[fill]').removeAttr('fill')
					$('[stroke]').removeAttr('stroke')
					$('[style]').removeAttr('style')
				},
				parserOptions: { xmlMode: true }
			}))
			.pipe($.plugins.replace('&gt;', '>'))
			.pipe($.plugins.svgSprite({
				mode: {
					symbol: {
						sprite: '../sprite.svg',
						svg: {
							xmlDeclaration: false,
							doctypeDeclaration: false
						},
						render: {
							scss: {
								dest: '../../../src/mixins/sass/_sprite-svg.scss',
								template: 'src/templates/sass/_sprite_svg_template.scss'
							}
						}
					}
				}
			}))
			.pipe($.gulp.dest(path.path.build.img))
	})
}
