const path = require( "path" );

module.exports = {
  experiments:{ outputModule:true },
  entry: {
    index: "./src/index.ts",
    // cli: "./src/cli.ts",
  },
  watch: true,
  target: [  "es2020", "node" ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
      }
    ]
  },
  stats:{ errorDetails:true },
  mode: "development",
  devtool: "source-map",
  resolve: { extensions: [ ".ts", ".js" ] },
  output: {
    library: {
      // do not specify a `name` here
      type: "module",
    },
    libraryTarget: "module",
    module:true,
    path: path.join( __dirname, "dist" ),
    filename: "index.js"
  },
};

// also create one for the CLI