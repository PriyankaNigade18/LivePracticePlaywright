
import XLSX from "xlsx"

const workbook=XLSX.readFile("./data/TestData.xlsx");
const worksheet=workbook.Sheets["loginData"];
//load cell data
const cell=worksheet["A2"];


// //get thevalue
// console.log(cell);

// console.log(cell.v);



//second execution for utility
// const workbook1=XLSX.readFile("./data/TestData.xlsx");
// const worksheet1=workbook.Sheets["loginData"];
const data=XLSX.utils.sheet_to_json(worksheet,{header:1})
console.log(data);
console.log(data[0]);
