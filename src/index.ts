import * as XLSX from 'xlsx';
import * as fs from 'fs';

// xlxsの読み込み
const workbook = XLSX.readFile("xlsx/sample.xlsx");
const sheetNames = workbook.SheetNames;
// console.log(sheetNames);

const sheetData: string[][] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]], {header: 1, defval: "", blankrows: false});
// defval nullまたはundefinedの代わりに指定された値を使用する。
// blankrows 空白行をスキップするには、blankrowsをfalseに設定しなければならない。

const output = sheetData.map((row) => {
  return row.join(" ") + "\n";
});
console.log(output);

// txtに書き込み
fs.writeFileSync("./output.txt", output.join("\n"), "utf-8");
