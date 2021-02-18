const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@router": path.resolve(__dirname, "src/router"),
        "@store": path.resolve(__dirname, "src/store"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@shared-components": path.resolve(__dirname, "src/shared-components"),
        "@assets": path.resolve(__dirname, "src/assets")
      }
    }
  }
};
