var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, "test.js"),
  output: { filename: "output.test.js" },
  module: {
    rules: [
      { test: /\.xlsx$/, loader: "../index.js" }
    ]
  }
}
