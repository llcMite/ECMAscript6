var arr=[1,2,3,4,6,76,3,2,452,5];
console.log(Math.max.apply(null,arr));
console.log(Math.max(...arr))
var str='miaov';
var arr1=[...str];
console.log(arr1)