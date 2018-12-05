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

//funtie anonima
var sayBye = function(){
	console.log("Bye"); 
}

//functie 2
function sing(){
	console.log("AAAAAA");
	console.log("bbbbbbb")
}
sing();

//functie 3
function sing(song){
	console.log(song);

}
sing("aaaaa");
sing("bbbbb");
//functie 4
function multiply(a,b){
	a*b
}
multiply(5,10);

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

