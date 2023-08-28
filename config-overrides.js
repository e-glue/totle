const { override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.(png|jpg|gif)$/i,
    type: "asset",
    parser: {
      dataUrlCondition: {
        maxSize: 4 * 1024 * 1024, // 4MB
      },
    },
  }),
);
