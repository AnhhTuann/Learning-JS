const { table } = require("table");

let data, output;

var title = ["Ten", "Lop", "Ngay Sinh"];
var students1 = ["Tuan", "2A", "25-10-1999"];
var students2 = ["Hieu", "3A", "??-??-????"];

data = [title, students1, students2];

output = table(data);

console.log(output);
