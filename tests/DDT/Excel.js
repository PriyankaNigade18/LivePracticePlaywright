
import XLSX from "xlsx"

const workbook=XLSX.readFile("./data/TestData.xlsx");
const worksheet=workbook.Sheets["loginData"];
//load cell data
const cell=worksheet["A2"];

//get thevalue
console.log(cell);

console.log(cell.v);



