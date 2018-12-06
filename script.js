//array de obiecte useri
var database = [
	{
	username: "ana",
	password: "secret"
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
	}
];
//action usser credential
var userNamePrompt = prompt("What is your name?");
var passwordPrompt = prompt("What is your password?");



function signIn(user, pass) {
	if (user === database[0].username &&
		pass === database[0].password) {
		console.log(newsFeed);
	
}else{
	alert("Sorry, wrong username and password");
}
}
//apelez functia sinin care accepta doi parametri dandu-i cele doua arg
signIn(userNamePrompt, passwordPrompt);