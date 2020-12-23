module.exports = {
    root: true,
    modules: {
        "bem-tools": {
            plugins: {
                create: {
                techs: ["pug", "sass", "js"],
                    levels: {
                        "src/components": {
                            default: true
                        }
                    }
                }
            }
        }
    }
};
