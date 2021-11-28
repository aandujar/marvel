module.exports = {
    publicPath: '/marvel/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/base-vars.scss";`
            }
        }
    }
}
