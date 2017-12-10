import spreadsheet from './spreadsheet.xlsx'

if (spreadsheet.SheetNames[0] === 'Sheet1') {
  console.log('Spreadsheet parsed!')
} else {
  console.log("Something went wrong parsing the spreadsheet")
  process.exit(1)
}
