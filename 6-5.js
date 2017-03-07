// let a=Symbol();
// console.log(typeof a);
let mySymbol=Symbol();
var a={};
Object.defineProperty(a,mySymbol,{value:'hello!'});
console.log(a[mySymbol])