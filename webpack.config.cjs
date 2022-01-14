const path = require( "path" );

module.exports = {
  entry: {
    index: "./src/index.ts",
    cli: "./src/cli.ts",
  },
  watch: true,
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
      }
    ]
  },
  stats:{ errorDetails:true },
  mode: "production",
  resolve: { extensions: [ ".ts", ".js" ] },
  output: {
    // libraryTarget: "umd",
    chunkFormat:"commonjs",
    path: path.join( __dirname, "dist" ),
    // filename: "index.js"
  }
};

// also create one for the CLI