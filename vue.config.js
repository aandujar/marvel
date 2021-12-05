module.exports = {
    publicPath: "/marvel/",
    outputDir: "docs",
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/base-vars.scss";`
            }
        }
    }
}