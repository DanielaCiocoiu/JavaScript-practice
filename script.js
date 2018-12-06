//array de obiecte useri
var database = [
	{
	username: "ana",
	password: "secret"
	},
		{
	username: "Maria",
	password: "123"
	},
		{
	username: "Vasile",
	password: "abc"
	}
];
//array de news
var newsFeed = [
	{
	username: "Maia",
	timeline: "watched the sky"
	},

	{
	username: "Nicu",
	timeline: "good morning sunshine1"
	},
	{
	username: "Ami",
	timeline: "good morning sunshine1"
	}
];

function isUserValid(username, password){
	for (var i = 0; i < database.length; i++) {
		if (database[i].username === username &&
			database[i].password === password) {
return true;
		}
}
return false
}

function signIn(username, password) {
	if(isUserValid(username, password)){
		console.log(newsFeed);
	}else{
		alert("Sorry, wrong username and password");
	}
}

//action usser credential
var userNamePrompt = prompt("What is your name?");
var passwordPrompt = prompt("What is your password?");

//apelez functia sinin care accepta doi parametri dandu-i cele doua arg
signIn(userNamePrompt, passwordPrompt);