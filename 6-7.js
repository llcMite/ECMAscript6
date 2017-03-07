var sex="nan";
var person={
	name:"小明",
	[sex]:false,
	['get'+'name'](){
		return this.name
	}
}
console.log(person[sex])
console.log(person.getname())
