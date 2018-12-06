var firstName ="Bob";
var lastName = "Smith";
if(firstName==="Bob"&&lastName==="Smith"){
	alert("Hi Bob Smith");


}

var age=prompt("What is your age: ");

if( Number(age) <18 ){
	alert("Sorry, you are too young to drive this car. Powering off");
}
else if( Number(age)>18 ){
	alert("Congratulations on your first year of driving. Enjoy the ride!");

}else if (Number(age) === 18){
	alert("Powering On. Enjoy the ride!");
}

//functie 1
function sayHello(){
	console.log("Hello");
}

sayHello();

//funtie 2 anonima
var sayBye = function(){
	console.log("Bye"); 
}

//functie 3 
function sing(song){
	console.log(song);

}
sing("aaaaa");
sing("bbbbb");

//demo undefined
function multiply(a,b){
	console.log(a,b) // log la consola dar rezultatul este undefined
	a*b
}
multiply(5,10);//undefined pt ca nu am return


//functie return
function multiply(a,b){
	return a*b
}
multiply(5,10);


var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}


//Use Function Declaration 
function checkDriverAge() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}
checkDriverAge();

//2. Function Expression, functie anonima
var checkDriverAge2 = function() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}
checkDriverAge2();
// folosesc console.log si fac functia checkDriverAge() sa accepte orice argument
function checkDriverAge(age) {
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}
console.log(checkDriverAge(92));

//array care contine o functie
var functionList=[function apple()
	{ console.log("apple");
}]


//array 
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove Banana 
array.shift();

// 2. Sort 
array.sort();

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");

// 4. Remove "Apples" 
array.splice(0, 1);

// 5. Sort  reverse order. 
array.reverse();

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
array2[1][1][0];


// 1. obiect cu doua proprietati
{
	username: "andrei",
	password: "supersecret"
}

// 2. array care contine ob de mai sus
var database = [
	{
		username: "andrei",
		password: "supersecret"
	}
];

// 3. array cu 3 obiecte
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];



