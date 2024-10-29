// Node.js ka os module system-related information aur operations ko handle karta hai. Isse hum operating system ke baare mein details le sakte hain, jaise system architecture, free memory, total memory, CPU info, network interfaces, aur uptime, etc.

const os = require("os");
console.log("Architecture: ", os.arch());
console.log("Plateform: ", os.platform());
console.log("CPU Info: ", os.cpus());
console.log("Free Memory: ", os.freemem(), "bytes");
console.log("Total Memory: ", os.totalmem(), "bytes");
console.log("Home Directory: ", os.homedir());
console.log("Hostname: ", os.hostname());
console.log("System Uptime: ", os.uptime(), "seconds");
console.log("Network Interface: ", os.networkInterfaces());
