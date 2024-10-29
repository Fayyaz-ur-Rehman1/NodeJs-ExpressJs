const fs = require("fs");

console.log("1");
console.log("2");

// //  Sync... Blocking Req...
const result =  fs.readFileSync("./contact.txt", "utf-8");
console.log(result);
console.log("3");


// Async... Non Blocking Req...
// console.log("1");
// console.log("2");
// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//     console.log(result);

// });
// console.log("3");
// console.log("4");