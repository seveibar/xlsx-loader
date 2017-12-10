# Webpack XLSX Loader

![Build Status](https://circleci.com/gh/seveibar/xlsx-loader.png?circle-token=4f40755dbd3a1856769840f048d6c417328e456a)

Imports and parses xlsx files for usage with the [xlsx npm module](https://www.npmjs.com/package/xlsx).

## Install

```
npm install --save-dev webpack-xlsx-loader
```

## Usage

Add a rule to your webpack config.

```javascript
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
