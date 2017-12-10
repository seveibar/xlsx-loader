const XLSX = require('xlsx')


module.exports = function () {
  const content = XLSX.readFile(this.resourcePath)
  return `module.exports = ${JSON.stringify(content)}`
}
