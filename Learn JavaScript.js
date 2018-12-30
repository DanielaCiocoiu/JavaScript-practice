var firstName = "Bob";
var lastName = "Smith";
if (firstName === "Bob" && lastName === "Smith") {
  alert("Hi Bob Smith");
}

var age = prompt("What is your age: ");

if (Number(age) < 18) {
  alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) {
  alert("Congratulations on your first year of driving. Enjoy the ride!");
} else if (Number(age) === 18) {
  alert("Powering On. Enjoy the ride!");
}

//functie 1
function sayHello() {
  console.log("Hello");
}

sayHello();

//funtie 2 anonima
var sayBye = function() {
  console.log("Bye");
};

//functie 3
function sing(song) {
  console.log(song);
}
sing("aaaaa");
sing("bbbbb");

//demo undefined
function multiply(a, b) {
  console.log(a, b); // log la consola dar rezultatul este undefined
  a * b;
}
multiply(5, 10); //undefined pt ca nu am return

//functie return
function multiply(a, b) {
  return a * b;
}
multiply(5, 10);

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
};
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
var functionList = [
  function apple() {
    console.log("apple");
  }
];

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

// 1. array care contine ob cu doua proprietati
var database = [
  {
    username: "andrei",
    password: "supersecret"
  }
];

// 2. array cu 3 obiecte
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

//returnez ultimul element, unul cate unul
var todos = ["apple", "banana", "peach", "orange", "blueberry"];

var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
  todos.pop();
}

todos.forEach(function(i) {
  console.log(i);
});

function selectionSort(arr) {
  var minIdx,
    temp,
    len = arr.length;
  for (var i = 0; i < len; i++) {
    minIdx = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}

//fizzbuzz
for (var i = 1; i <= 20; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}

//prime
function isPrime(n) {
  var divisor = 2;

  while (n > divisor) {
    if (n % divisor == 0) {
      return false;
    } else divisor++;
  }
  return true;
}

isPrime(137);
isPrime(237);

//variable scope
var b = "Can I access this?";
function bb() {
  var a = "hello";
  Console.log(b);
}
bb(); //can I acces this

//----------------------------------
function q1() {
  var a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(a); //3
}

// run q2() in consola apoi aduc noua valoare si run q22()
var a = 0;
function q2() {
  a = 5;
}

function q22() {
  alert(a); //5
}

// q22() -- 0
// q2() -- undefined
// q22() -- 5

function q3() {
  window.a = "hello";
}

// run q3() in consola ca sa aduc o prop in window apoi run q32()
function q32() {
  alert(a); //"hello"
}

//#4
var a = 1;
function q4() {
  var a = "test";
  alert(a); //"test"
}

//#5 cu  var keyword, if statements nu creaza un nou scope
var a = 2;
if (true) {
  var a = 5;
  alert(a); // 5
}
alert(a); // 5
