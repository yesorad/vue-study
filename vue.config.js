const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": path.join(__dirname, "src/"),
      },
    },
  },
  css: {
    extract: true,
    loaderOptions: {
      sass: {
        additionalData: "@import '@/assets/style/config/index';",
        sourceMap: true,
      },
    },
  },
};
