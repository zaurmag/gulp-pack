module.exports = {
    root: true,
    modules: {
        'bem-tools': {
            plugins: {
                create: {
                techs: ['pug', 'sass', 'js'],
                    levels: {
                        'src/components': {
                            default: true
                        }
                    },
                    naming: {
                        delims: {
                            elem: '-',
                            mod: { name: '--', val: '_' }
                        },
                        wordPattern: '[a-zA-Z0-9]+'
                    }
                }
            }
        }
    }
}
