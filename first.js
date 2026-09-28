// (function (exports, require, module, __filename, __dirname) {
let Daa = require('./second');
let sub = require('./third')

console.log("a = " + Daa.a);
console.log("b = " + Daa.b);
Daa.add(9,8,5);
sub(15,9);
//})