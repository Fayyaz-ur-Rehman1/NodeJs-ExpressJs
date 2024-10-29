// function add(a, b) {
//     return a + b
// }

// function sub(a, b) {
//     return a - b
// }

// function devide(a, b) {
//     return a / b
// }

// module.exports = {
//     add,
//     sub,
//     devide
// }

// exports.add = (a,b) => a + b
// exports.sub = (a,b) => a - b
// exports.devide = (a,b) => a / b

function moduler(a, b) {
    return a % b;
}
function power(a, b) {
    return Math.pow(a, b);
}

module.exports = {
    moduler,
    power
}