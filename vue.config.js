module.exports = {
    publicPath: "/marvel-prueba/",
    outputDir: "docs",
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/base-vars.scss";`
            }
        }
    }
}
