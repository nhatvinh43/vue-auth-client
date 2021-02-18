const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@app": path.resolve(__dirname, "src/"),
        "@components": path.resolve(__dirname, "src/components"),
        "@router": path.resolve(__dirname, "src/router"),
        "@store": path.resolve(__dirname, "src/store"),
        "@shared-components": path.resolve(__dirname, "src/shared-components"),
        "@assets": path.resolve(__dirname, "src/assets")
      }
    }
  }
};
