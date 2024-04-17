var fruits = new Array("apple", "orange","mango");
console.log(fruits);
// document.write(fruits);

var veggies=["tomato","potato","brinjal"]
console.log(veggies);
// document.write(veggies);

 var dairy=["mmilk","butter","cheese"]

// fruits.pop();
// console.log(fruits);

// fruits.shift();
// console.log(fruits)
fruits.push("kiwi");
console.log(fruits);

fruits.unshift("berry");
console.log(fruits)

// fruits.splice(1,0,"pear")
// console.log(fruits)

// fruits.splice(1,2)
// console.log(fruits)

// fruits.splice(2,3)
// console.log(fruits)

var test = fruits.sort();
console.log(test);

var basket= fruits.concat(veggies,dairy)
console.log(basket)

document.writeln(basket)

var num=["1","52","98","47","9","13","2"]
num.sort(reverse);
function reverse(a,b){
	return b-a
}
console.log(num);


var over25=num.filter(myfunction)
function myfunction(value,index,arry) {
	return value>25;
}
console.log(over25)


var over26=num.filter((value,index,array)=>{
	return value>26;
})
console.log(over26);

var users =["anu","manu","tanu","anu","manu","anu","kiran"]
	var duplicate = users.filter((value,index,array)=>{
		return array.indexOf(value)===index;
	})
	console.log(users)
	console.log(duplicate)