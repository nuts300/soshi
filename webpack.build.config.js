const path = require("path");

module.exports = {
  entry: "./src/library.ts",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "soshi.js",
    library: 'soshi',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: ["node_modules", "src", "types"]
  },

  module: {
    rules: [
      {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
      {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
    ]
  }
};
