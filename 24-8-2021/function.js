//Annonymous Function
// (function () {
// 	document.write('test');
// 	console.log('hey!')
// })();

//Naming Function
// function loadTemplete1() {
// 	var templete1=document.getElementById('templete1');
// 	templete1.style.visibility="visible";
// 	templete2.style.visibility="hidden";

// 	templete1.innerHTML = `
// 	<html>
// 	<head>
// 	<title>TEMP 1</title>
// 	<style>
// 	body{
// 		background-color:cyan;
// 	}
// 	</style>
// 	</head>
// 	<body>
// 	<h1>Templete 1 loaded</h1>
// 	</body>
// 	</html>`

	
// }
// function loadTemplete2() {
// 	var templete2=document.getElementById('templete2');
// 	templete2.style.visibility="visible";
// 	templete1.style.visibility="hidden";

// 	templete2.innerHTML = `
// 	<html>
// 	<head>
// 	<title>TEMP 1</title>
// 	<style>
// 	body{
// 		background-color:pink;
// 	}
// 	</style>
// 	</head>
// 	<body>
// 	<h1>Templete 2 loaded</h1>
// 	</body>
// 	</html>`

	
// }


//function expression

// var x= function(x){
// 		return x*x;
// }

// document.write(x(4));






//function with arguments
// function emp(name,age,company) {
// 	document.write(`My name is ${name}, i work for ${company} and my age is ${age}`)
	
// }

// emp("vijayalaxmi", "25", "JSPIDERS")


//function with return type
// function add(a,b){
// 	var c=a+b;
// 	return c;
// }
// document.write(add(2,3))


//function with default value for the parameter
//ecmascript 5way to write the function with default parameter
// function numbers(num) {
// 	if(num==undefined){
// 		num=10;
// 	}
// 	console.log(num);
// }
// numbers(50);

//ecmascript 6 way
// function numbers(num=10){
// 	console.log(num);
// }
// numbers(100);
//functiion with argument object
// function names(args) {
// 	console.log("my name is ",args);
// 	var names = Array.from(arguments);
// 	 var[...names] = arguments;
// 	names.forEach(function(name){
// 	console.log("my name is",name);
// 	});
// }
// names("vk","bk","gk","ak")

//clouser function

function show(){
	var outerBlock="hello outer block";
	document.write(innerBlock());
	console.log(outerBlock)



	function innerBlock(){
		var innerText ="hello inner text";
		console.log(innerText)
	}
}

show();

