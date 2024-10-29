// Node.js modules reusable code blocks hote hain jo ek file mein define kiye jaate hain aur require() function se import kiye ja sakte hain. Yeh modules core (jese http, fs), third-party (NPM libraries), ya user-defined ho sakte hain. Modules alag-alag functionality ko separate rakhne aur code ko modular aur manageable banane ke liye use hote hain.


// console.log("Hello! I am JS");
// const math = require("./math");
// console.log(math.devide(2,4));
// console.log(math);

// const { add, sub, devide } = require("./math");
// console.log(add(23, 43));
// console.log(sub(23, 43));
// console.log(devide(23, 43));


// let math = require("./math");
// console.log(math.moduler(23,3));
// console.log(math.power(2,3));

const { moduler, power } = require("./math");
console.log(moduler(10, 10));
console.log(power(2, 3));

