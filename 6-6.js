/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-07 09:50:28
 * @version $Id$
 */
// var arr=[1,4,5,6,767,3,6,622,4,9];
// for(var value of arr){
// 	console.log(value)
// }
// for(var key of arr.keys()){
// 	console.log(key)
// }
// for(var [key,value] of arr.entries()){
// 	console.log(key,value)
// }
// function show(x,y){
// 	x++;
// 	y++;
// 	return {
// 		x:x,
// 		y:y
// 	}
// }
// console.log(show(1,2));
// function show6(x,y){
// 	x++;
// 	y++
// 	return {
// 		x,y
// 	}
// }
// console.log(show6(1,2))
var obj={
	name:"小明",
	showName:function(){
		return this.name;
	}
}
var obj6={
	name:"小红",
	showName(){
		return this.name;
	}
}
console.log(obj.showName());
console.log(obj6.showName());