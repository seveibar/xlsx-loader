# Webpack XLSX Loader

![Build Status](https://circleci.com/gh/seveibar/xlsx-loader.png?circle-token=b5b39e67e7230df2796a21b96184f53989e60d5d)

Imports and parses xlsx files for usage with the [xlsx npm module](https://www.npmjs.com/package/xlsx).

## Install

```
npm install --save-dev webpack-xlsx-loader
```

## Usage

Add a rule to your webpack config.

```json
module.exports = {
  module: {
    rules: [
      { test: /\.xlsx$/, loader: "webpack-xlsx-loader" }
    ]
  }
}
```

You can then directly import and use `xlsx` to manipulate your excel spreadsheet
(if you need more complicated functionality).

```javascript
import spreadsheet from './spreadsheet.xlsx'
import xlsx from 'xlsx'

console.log(spreadsheet.SheetNames) // ['Sheet1']

const csvString = xlsx.utils.sheet_to_csv(spreadsheet.Sheets['Sheet1'])
```

## License

MIT © [Severin Ibarluzea](github.com/seveibar)
