// node.js module with example
const fs = require("fs");
let text = fs.readFileSync("tut46.txt", "utf-8");
text = text.replace("Modules" , "Function");
console.log("This content of the file is:")
console.log(text);

console.log("creating a new file")
fs.writeFileSync("max46.txt", text);
