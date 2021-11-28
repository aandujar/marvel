module.exports = {
    publicPath: 'https://aandujar.github.io/marvel/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/base-vars.scss";`
            }
        }
    }
}
