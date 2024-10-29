// Node.js ka fs (File System) module file handling ke liye use hota hai. Iske zariye hum files ko read, write, delete, rename, aur update kar sakte hain, aur synchronous ya asynchronous operations ke through file system ke saath kaam kar sakte hain.


const fs = require("fs");
// fs.writeFileSync("test.txt", "Hey fayyaz your new file");
fs.writeFile("asynfile.txt", "this is my second new file", (erro) => { })

// const result = fs.readFileSync("./test.txt", "utf-8");
// console.log(result);

fs.readFile("./asynfile.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Error", err);

    } else {
        console.log(data);
    }
})

// fs.appendFile("test.txt", `this is indian timing`, err => { })
// fs.appendFileSync("./asynfile.txt", `${new Date()} this is indian time`)
// fs.appendFileSync("./test.txt", `Hey There\n`)
