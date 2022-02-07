const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@loadable/component": path.resolve(__dirname, 'node_modules/@loadable/component'),
      "@apps": path.resolve(__dirname, "src/apps"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@react-router": path.resolve(
        __dirname,
        "src/shared/core/router.helper/reactRouter.tsx"
      ),
      "@static": path.resolve(__dirname, "src/static"),
    },
  };

  return config;
};
