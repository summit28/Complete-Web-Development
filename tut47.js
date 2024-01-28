//Blocking vs Non-Blocking execution
// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking-imp node.js cocept
// - line by line execution not guaranteed
// - callbacks will fire

const fs = require("fs");
fs.readFile("max46.txt", "utf-8", (err, data)=>{
    console.log(err,data);
});

console.log("This is a message");
