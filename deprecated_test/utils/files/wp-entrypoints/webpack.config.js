var path = require( "path" );

module.exports = {
  context: __dirname,
  entry: [ "./one.js", "./two.js" ],
  output: {
    path: path.normalize( path.join( __dirname, `../../../obfOut/${path.basename( __dirname )}` ) ),
    filename: "bundle.js"
  },
  mode: "production"
};