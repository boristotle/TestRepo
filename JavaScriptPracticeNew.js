// FizzBuzz

// Write a program that uses console.log to the result of FizzBuzz for a given number. 
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz", 
// for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

function fizzBuzz(num) {
if ( num % 5 === 0 && num % 3 === 0) {
  console.log("FizzBuzz");
}

else if (num % 3 === 0) {
  console.log("Fizz");
}

else if (num % 5 === 0) {
  console.log("Buzz");
}
}

fizzBuzz(3);

// (NOTES:  for numbers divisible by 3
//   print Fizz

// for numbers divisible by 5 print Buzz)




// Deaf Grandma

// Write a Deaf Grandma program. Whatever you say to grandma (whatever you type in), 
// she should respond with HUH?! SPEAK UP, SONNY!, unless you shout it (type in all capitals). 
// If you shout, she can hear you (or at least she thinks so) and yells back, NO, NOT SINCE 1938! 
// To make your program really believable, have grandma shout a different year each time; maybe any year at random between 1930 and 1950.

// NOTES:  1. create an input variable for whatever I want to say to grandma
// 2.  grandma responds with "HUH?!  SPEAK UP, SONNY!"
// 3.  else if input variable is said in toUpperCase()
// 4.  grandma responds with "NO, NOT SINCE year between 1930 and 1950
// 5.  use Math.floor((Math.random() * (possible options) + (start option) to create a random number between 1930 and 1950.


function deafGrandma() {
var input = prompt("What would you like to say to grandma?");
if (input === input.toUpperCase()) {
  console.log("NO, NOT SINCE " + Math.floor((Math.random() * 20) + 1930) + "!");
}
else {
    alert("HUH?! SPEAK UP, SONNY!");
}
}
deafGrandma();









// Print the numbers 1 to 10 and also the number 10 to 1, side by side. The output should look like this:

// 1  10
// 2  9
// 3  8
// 4  7
// 5  6
// 6  5
// 7  4
// 8  3
// 9  2
// 10 1


function iJ() {
for(i = 1, j = 10; i <= 10, j >= 1; i++, j--)
  console.log(i, j)
}

iJ();









// Validation Requirements

// Create an html file and JavaScript file and add a script tag to include the JavaScript file as before


// Prompt the user to enter their phone number with dashes.  Alert the user if their phone number is valid 
// (just true or false) according to the simple rule that the fourth and eighth characters
// must be dashes.

var phone = prompt("Enter your phone number with dashes");
if (phone.charAt(3) === (-) && phone.charAt(7) === "-") && !isNan(phone) {
  return true;
}




Following the same procedure as #2 and #3 above to prompt and validate the following fields:


birth date (must follow the format xx/xx/xx)


postal code (must follow the format xxxxx OR xxxxx-xxxx)



state abbreviation (must be two characters, must be all caps)



married (must be yes or no, Any capitalization is valid)






Write a program that checks if a phrase is a palindrome. For example, 
the name ana is a palindrome because it is the same forwards as it is in reverse. 
Extra credit Ignore capitalization when checking for palindromes.





99 Bottles: Write code to print out the lyrics to 99 bottles of beer on the wall. Pay attention to pluralization!

function 99bottles() {

  for (i = 99; i >= 0; i--) {
    console.log(i + "bottles of beer on the wall " + i " bottles of beer on the wall, take one down pass it around" + (i - 1) " bottles of beer on the wall!")
  }
}




// Odd Numbers Write code to print all the odd numbers between 1 and 1337.

for (var i = 1; i < 1338, i+=2)
  console.log(i);




Temperature Convertor Write code that asks the user for a temperature   in Celsius and converts it to Fahrenheit. 
Bonus: ask the user first if they want to convert from F to C or C to F.
















// Write a for loop AND a while that returns the following outputs:

for (i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i + "(even)");
}

if (i % 2 !== 0) {
    console.log(i + "(odd)");
  }
}

1(odd)
2(even)
3(odd)
4(even)
5(odd)
6(even)
7(odd)
8(even)
9(odd)
10(even)






// Conference 1:
// Team 1
// Team 2
// Team 3
// Team 4
// Conference 2:
// Team 1
// Team 2
// Team 3
// Team 4
// Conference 3:
// Team 1
// Team 2
// Team 3
// Team 4
// Conference 4:
// Team 1
// Team 2
// Team 3
// Team 4


for (var i = 1; i <=4; i++) {
  console.log("Conference " + i)
  for (var j = 1; j <=4; j++) {
  console.log("Team " + j)
}
}






// 11 times 1 equals 11
// 11 times 2 equals 22
// 11 times 3 equals 33
// 11 times 4 equals 44
// 11 times 5 equals 55


for(i = 1; i <=5; i++) {
  console.log("11 times " + i + " equals " + (11 * i ))
}




// Define a function called sum that takes two numbers as arguments and returns their sum.

function sum(x,y) {
return x * y;
}





// Define a function called isEqual that takes two arguments and returns a boolean. 
// Return true if the two arguments are equal and return false if they are not.

function = isEqual(x, y) {
  if (x === y);
  return(true);
}

else {
  return false;
}




// Define a function called discountPercentage that returns the total discount ($),
// given the original amount and discount percentage (as arguments). Return a warning if the 
// discount amount is greater than 100 or less that 0 percent.

var discountPercentage = function(total, discount) {
if (0 < discount <100 ) {
  return total * discount;
}

else {
  return "Warning: discount is not applicable";
}
}

discountPercentage(100, .5);



// Define a function called stringCapitalize that takes a string as an argument and 
// returns the same string with the first letter of each word capitalized. 
// Assume that each individual word is separated by only one space.


var stringCapitalize = function(str) {
str.split(" ");
var output = '';
for (var i = 0; i < str.length; i++) {
  var currentString = str[i];
  currentString = currentString.charAt(0).toUpperCase() + currentString.slice(1);
}
return output.join();

}






// Define a function called evenNumbers that takes a random integer,
// from 0 to 100, and outputs all the even integers from 0 to that random number.


var evenNumbers = function() {
var randomInteger = Math.floor((Math.random() * 100) + 1);
console.log(randomInteger);
for (var i = 0; i < randomInteger; i++) {
  if (i % 2 === 0) {
    console.log(i);
   
  }
}

}

evenNumbers();




// Define a function called isDivisible that takes two arguments and returns a boolean. 
// Return true if the first argument is divisible by the second; otherwise, return false.

var isDivisible = function(x, y) {
if (x % y === 0) {
return true;
}
else {
  return false;

}

}






// Bonus: Write a function called oddNumbers that takes a random integer, from 0 to 100. 
// If the number is greater than 40 then output all the odd integers from 40 to the random number. 
// If the number is less than 40, output all the odd integers from 0 to 40.

function oddNumbers() {
var number = Math.floor((Math.random() * 100) + 0)
console.log(number);
if (number > 40) {
  for (var i = 41; i <= number; i+=2) {
  console.log(i);
}
}
else if (number < 40) {
  for (var j = 1; j < 39; j+=2) {
    console.log(j)
  }
} 
}
oddNumbers();

 





Define a function called oldestPerson that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), 
and then returns the name of the oldest living person.

function oldestPerson(obj) {
for (property in oldestPerson) {        
}
  (i = 0; i < obj.length; i++)
  if (property[i])
  console.log(property[i]);
}
} NOT FINISHED





Define a function called longestWord that takes a string and returns the longest word in the string.
Refactor the longestWord function so that it ignores punctuation.

function longestWord(str) {
str.split("");
var longest = 0;
var output = '';
for (var i = 0; i < str.length; i++) {
  if ([i].length > longest) {
   var longest = [i].length;
  }
  }
output.push(longest;)

}






// Define a function called factorial that takes a random number as an argument and then returns the factorial of that given number.

function factorial(number) {
  var factorial = 1;
for (var i = 1; i <= number; i++) {
      factorial = factorial * i;
}
console.log(factorial);
}

factorial(4);














// Bonus: Write a function called palindrome that takes a string as an argument and returns the string in reversed order. 
// Return true if the string is the same as the reversed string, otherwise return false.

function palindrome(str){
  var output = [];
  var strBackwards = str.split('');
for (var i = str.length - 1; i >= 0; i--) {
   output.push(str[i]);
}
   
var results = output.join('').toLowerCase();
if (results === str) {
  return true;
}
else {
  return false;
}
}

palindrome("yayay");











// Create an object that takes a series of numbers as an array and then find (and output) the average and the max. Use a function!


var average = function(arrOfNumbers) {
var sum = 0;
for (i = 0; i < arrOfNumbers.length; i++) {
  sum = arrOfNumbers[i] + sum;
}
console.log(sum / arrOfNumbers.length);
}

average([10,10,10,9,8,7,6,5,4,3,2,1]);




var maxNumber = function(arrOfNumbers) {
var max = 0;
for (i = 0; i < arrOfNumbers.length; i++) {
  if (arrOfNumbers[i] > max) {
    max = arrOfNumbers[i];
  }
}
console.log(max);
}

maxNumber([10,10,75,9,8,7,6,5,4,99,2,1000]);








// Write a function named calculateAge that takes 2 arguments: birthYear and currentYear. 
// Calculate the 2 possible ages based off of the arguments, and output the result to the screen
// like so: "You are either 46 or 47". BONUS: Figure out how to get the current year in JavaScript instead of passing it in.


var calculateAge = function(birthYear) {
var age1 = new Date().getFullYear() - birthYear;
var age2 = new Date().getFullYear() - birthYear -1;
console.log("You are either " + age1 + " or " + age2 + "!");

}


calculateAge(1981);







Write a function perfectSquarePrinter(n) that will print out the first n perfect squares.
















// Define a function maxOfThreeNumbers which takes three numbers as arguments and returns the largest one.

var maxOfThreeNumbers = function(arr) {
var max = 0;
for (var i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  } 
}
return max;
}


maxOfThreeNumbers([5, 10, 15]);








// Write a function vowelChecker which takes a single letter string and returns true if it is a vowel and false if it is not.


function vowelChecker(n) {
if (n === "a" || n === "e" || n === "i" || n === "o" || n === "u") {
  return true;
}
else {
  return false;
}
}

vowelChecker("a");











Create a 'Guessing Game'. The game starts by picking a random number. 
It then prompts the user to guess the number. If the user's number is lower/higher, 
it will prompt the user to enter another guess and tell the user if the guess was too high or too low. 
This continues until the correct guess is entered. When the correct guess is entered the user is given a success message 
with the correct number. (This one needs to be done in the browser, hint is to find out what prompt is and use it!)

var randomNumber = Math.floor((Math.random()) * 1000) + 1)
var guess = prompt("What is your guess?")

var randomNumber = Math.floor((Math.random() * 1000) + 1);
console.log(randomNumber);
var guess = prompt("What is your guess?");
switch (while (guess != randomNumber)) {
case guess > randomNumber :
  prompt("Your guess was too high, guess agai!");
  break;
case guess < randomNumber : 
  prompt("Your guess was too low, guess again!");
  break;
case guess = randomNumber : 
"You guessed right, wowza!"
break;
}


var randomNumber = Math.floor((Math.random() * 1000) + 1);
console.log(randomNumber);
var guess = prompt("What is your guess?");
while (guess > randomNumber) {
var answer = prompt("Your guess was too high, guess again!")
}
while (guess < randomNumber) {
var answer = prompt("Your guess was too low, guess again!")
  }
while (guess === randomNumber) {
  alert("Wowza, you got it right!")
}









// Write the javascript code to print the following:

// Thompson's number
// Green's position
// The entire object that represents Curry.

Use the following object:

var players = [
    {name: 'Curry', number: '30', position: 'point guard'},
    {name: 'Thompson', number: '11', position: 'shooting guard'},
    {name: 'Barnes', number: '40', position: 'small forward'},
    {name: 'Green', number: '23', position: 'power forward'},
    {name: 'Bogut', number: '12', position: 'center'}
];




function getPlayer (inputName, obj) {
  for(i = 0; i < obj.length; i++) {
    if (obj[i].name === inputName) {
      return obj[i].number
    }
  }
}

getPlayer("Thompson", players);


function getPlayer(inputName, obj) {
for (i=0; i < obj.length; i++) {
  if (obj[i].name) === inputName {
    return obj[i].position;
  }
}
}

getPlayer("Green", players);

function getPlayer(inputName, obj) {
for (i=0; i < obj.length; i++) {
  if (obj[i].name) === inputName {
    return obj[i];
  }
}
}

getPlayer("Curry", players);







Write a method that returns the String: "awesome" when the provided name parameter has an odd number of characters
"not awesome" when the provided name parameter has an even number of characters (Hint: String length property)


[Challenge] Let p be a polynomial of the form ax<sup>2</sup> + bx + c. Write a function named quadraticFormula 
that uses the quadratic formula to determine the roots of p. To simplify the problem, you may assume that a,b,c are provided
 as the arguments to the quadraticFormula function, so that invoking the function might look like: quadraticFormula(2,-3,0.5), 
 your function should return an array in which the first value is the solution to the + case and second value is the solution to 
 the - case (Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow).
[Challenge] The Collatz Conjecture is an open problem in mathematics in which a recurrence relation (on the wikipedia page) is 
conjectured to always converge on 1, but this remains unproven. Using recursion, write a function named collatzSequence that 
returns an array containing the Collatz Sequence for a provided number argument. A treat for when you finish. (inspiration from: Project Euler)









1. Write a function named `reverseString` that takes a String argument and returns the string reversed. Sample test cases look like:
reverseString = function(string) {
    return string.split('').reverse().join("");

}

reverseString("string");




```reverseString(''); // ''
reverseString('foof'); // 'foof'
reverseString('stringey'); // 'yegnirts'

```

1. Write a function named `reverseArray` that takes an Array argument and returns the array with all elements reversed. DO NOT use `Array#reverse` in your solution. Sample test cases look like:


var reverseArray = function(n) {
  var output = [];
  for (var i = n.length; i >= 0; i--) {
    output.push(n[i]);
  }
  return output;
}

reverseArray(["hello", "how", "are", "you?"]);





```reverseArray([]); // []
reverseArray([1,2,3,4]); // [4,3,2,1]
reverseArray([{obj1: true}, {obj2: false}]); // [{obj2: false}, {obj1: true}]
```

1. Write the function that provides the following behavior:

```flexString('some', 'strings'); // "some,strings"
flexString('some', 'strings', 'are'); // "some|strings|are"
flexString('some', 'strings', 'are', 'sometimes'); // "some,strings,are,sometimes"
flexString('some', 'strings', 'are', 'sometimes', 'cool'); // "some|strings|are|sometimes|cool"



1.  separate the argument into it's parts
2.  count the number of parts
3.  if # of parts is even output part,part
4.  if # of parts is odd output part|part|part





flexString = function(string) {

string.separate();

var flexString = function() {
    var numberArguments = 0;
for (var i = 0; i < arguments.length; i++) {
numberArguments = numberArguments + i;}
}

console.log(numberArguments);
}


flexString("hello", "there", "you");


  if (numberArguments.length % 2 === 0) {
    arguments.join(",");
  }
  else {
    arguments.join("|")
  }
}



}







Implement a function which takes two parameters, both of which are arrays, and zips them together. 
ie: The arguments are [1,2,3], and [4,5,6], and after zipping the two arrays, you return [1,4,2,5,3,6].



var zipArrays = function(arr1, arr2) {
var zipped = [];
for(var i=0; i < arguments.length; i++){
   zipped.push(arr1[i], arr2[i]);
}
console.log(zipped);


}

zipArrays([1,2,3], [4,5,6]);






Implement a function which determines whether or not something is in an array. 
The function should be defined with two parameters, one of which is an array, 
the other which is either a string or integer. ie: Arguments [1,2,3], and 3, would return true. 
Arguments [1,2,3], 4, would return false.

var isInArray = function(arr, str) {
for (var i = 0; i < arr.length; i++) {
  if (str === arr[i]) {
    console.log(true);
  }
else {
    console.log(false);
}
}
}


isInArray([1,2,3,4,5], 4);



function isInArray(array, element) {
if (array.indexOf(element) > -1) {      (this line can be written as this:   if (array.indexOf(element) > -1)) ? true : false;)
  return true;
}
else {
  return false;
}
}

isInArrray([1,2,3,4], 4);



Implement a function which determines if an element appears more than once in an array.





Exercises



Experiment with the following function. Once you understand how it should behave refactor the convoluted function
 to use an inner function to remove duplication: ``` function convoluted(string) { var output = '';

for(var i = 0; i < string.length; i++) { output += ('a' + string.charAt(i)); }

for(var i = 0; i < string.length; i++) { output += ('b' + string.charAt(i)); }

return output; } ```

function convoluted(string1) {
  var output = '';
  var input = string1;

  function inner() {
    console.log(input)
    for(var i = 0; i < input.length; i++) {
      output += ('-' + input.charAt(i));
    }

    for(var i = 0; i < input.length; i++) {
      output += ('|' + input.charAt(i));
    }    
    console.log( output);
  }
  return inner()
}

convoluted('asdf')





Mentally evaluate the following code example. List out all things that are logged to the console, in the order they
 are logged. var bestMessageEver = 'Here is a message that is just the best.'; function worstMessageEver() 
 { console.log(bestMessageEver); var bestMessageEver = 'Here is a message that is just the worst.'; return; } worstMessageEver();










Mentally evaluate the following code example. List out all things that are logged to the console, in the order they are logged.
 ``` b = 10; console.log(b); b = 11; console.log(b);

var someValue = (function() { b = 12; return b; })(); console.log(someValue);








Create code examples (different from the ones you have seen so far) to illustrate local, global, 
and lexical scoping. You may use comments to explain how each example illustrates the concept.

GLOBAL EXAMPLES:

var name = "";

name2 = "";

function awesome() {
name 3 = "";

}


LEXICAL EXAMPLES:


function awesome() {
var name 4 = "";
}

function outside() {
  var outsideThing = "out";
  function inside() {
    var insideThing = "in";
access to outsideThing ok!
  }
  no access to insideThing
}





Create a code example (different from the ones you have seen so far) that illustrates what a closure is. 
You may use comments to explain how the example illustrates the concept.









[Challenge] Mentally evaluate the following code example. What is the value logged to the console? 
console.log((function (value) { return (function (copy) { return copy === value; })(value); })("Hello World"));









[Challenge] Explain the previous problem (again, do not use an interpreter, just your mind). If the argument "Hello World"
is changed to [1,2,3] what changes in the output? How about if the argument is "FooBarSki"?








Create a resume.js file and inside do the following:

 var resume = {
  FirstName: "Darrin",
  LastName: "Bennett",
  Experience: [{Company: "VRG", StartDate: "January", EndDate: "June"}, {Company: "Keller WIlliams", StartDate: "January", EndDate: "June"}],
  References: [{NameOfRef: "Mike", Phone: "444-444-4444", CompanyAddress: {Address: "1234 St", City: "Cedar Park", State: "TX", Zip: "78613"}}, 
  {NameOfRef: "Bob", Phone: "444-444-4444", CompanyAddress: {Address: "1234 St", City: "Cedar Park", State: "TX", Zip: "78613"}}, 
  {NameOfRef: "Greg", Phone: "444-444-4444", CompanyAddress: {Address: "1234 St", City: "Cedar Park", State: "TX", Zip: "78613"}}]
};

function PrintName() {
console.log(resume.FirstName +" " + resume.LastName)
};

PrintName();

Create a resume object: var resume = {};

Add the following properties to the resume object:

first name - value is a string
last name - value is a string
experience - value is an array of 2 objects with the following properties:
company (value is a string)
start date (value is a string)
end date (value is a string)

references - value is an array of 3 objects with the following property and value:
name of reference = phone number (string)
company addresses - value is an object with the company name as a property and an object as a value with the following properties:
address - (value is a string)
city - (value is a string)
state - (value is a string)
zip - (value is a number)


// Write a function that prints your first and last name

function PrintName() {
console.log(resume.FirstName +" " + resume.LastName)
};

PrintName();


// Write a function that prints a list of the companies you worked at, the address, city, state and zip of each company and your start and end date

function PrintExperience() {
console.log(resume.Experience)
};

PrintExperience();


Write a function that prints the name and phone number of the references for each company



Now, print them all out together so it looks like this: ( node resume.js in terminal)

Jeff Dean

Experience:

Galvanize 
345 Platte St
Denver, Colorado 80209
2013 - present
References:
Joe Schmoe: 773-995-5678
Sheila Schook: 415-876-1405
Lou Foley: 670-555-0900

Pivotal
12 Walnut St
Boulder, Colorado 54609
2011 - 2013
References:
etc ....




// 1. Create an object to represent a laptop. It should have state for whether or not it is `on`, 
// where or not it is `asleep`, and `numberOfDaysSinceLastRestart`. 
// Gsc v ive the laptop behaviors like `turnOff` (which should turn it off (not asleep) and reset the count since it was last restarted).

var laptop = {
    on: 'false',
    asleep: 'false',
    numberOfDaysSinceLastRestart: 25,
    turnOn: function() {
      if (this.on === false && this.asleep === false) {
        this.on = true;
      numberOfDaysSinceLastRestart = numberOfDaysSinceLastRestart = 0;
    },
    turnOff: function () {
      if(this.on === true || this.asleep === true) {
        this.on = false;
      }

    }
}







// 2. Create an object to represent a coffee mug. It should have state for being `full` as well 
// as its `capacityInOz` and `color`. A coffee mug should be able to be emptied and filled, but have no other behaviors.


var mug = {
  full: "true",
  capacityInOz: 20,
  color: "blue",
  refills: null,
  fillMug: function() {
        this.full = true;
        this.refills = this.refills + 1
    },
  emptyMug: function() {
      this.full = false;
     }
  }



// Given the example code, suppose that there needed to be a way to add or subtract money from the checkingBalance. 
// Write a method called addToChecking which takes a dollarAmount parameter and increments the checkingBalance by the provided dollarAmount.

// The idea behind the code and the addToChecking method is that we are changing this object's checkingBalance property.

// How do you invoke the addToChecking method on myBankAccount?

var myBankAccount = {
  accountHolder: 'Instructor 1',
  checkingBalance : 100,
  savingsBalance : 200
  addToChecking: function(dollarAmt) {
    this.checkingBalance = dollarAmt + this.checkingBalance
  }; 
}


function House(color, windows) {
  this.color = color;
  this.windows = windows;
  paintHouse = function(newPaintColor) {
  this.color = newPaintColor;
}
}











Concerning the following line of code:

console.log(Math.max(6,8,10,12));
How could you rewrite the above using apply?


The above case may be a bit tricky, but it is important to start thinking about the idea of "something or nothing" 
being present when coding. Additionally, it is a good opportunity to review substitution (e.g. Math.max is really 
just a function, [Function].apply acts on the function giving null as the value for this and the argument list (as an array) [6,8,10,12]).
Also, remember that "argument lists are applied to functions."












// Take a few minutes to read Array.prototype.slice. Work through the following example:

var example = [1,2,3,4,5];
console.log(example.slice(1));
// [2,3,4,5]
console.log(example.slice(1,3));
// [2,3]
console.log(example);
// [1,2,3,4,5]



// Next, write a function that has this signature slice(array, firstIndex, lastIndex) and behaves just like the aboveArray.prototype.slice.

sliceNew = function(array, firstIndex, lastIndex) {
  var output = [];
for (var i = array[firstIndex] - 1; i <= array[lastIndex] - 1; i++) {
         output.push(array[i]);
        }

return output;
}

sliceNew([1,2,3,4,5], 1, 4);



for Negative NUMBERS:


sliceNew = function(array, firstIndex, lastIndex) {
  var output = [];
    if (firstIndex >= 0 && lastIndex >=0) {
      for (var i = array[firstIndex] - 1; i <= array[lastIndex] - 1; i++) {
         output.push(array[i]);
        }
     }
     else { 
     firstIndex = firstIndex * -1;
     lastIndex = lastIndex * -1;
     array.reverse();
     for (var i = array[firstIndex] - 1; i <= array[lastIndex] - 1; i++) {
         output.push(array[i]);
     }
    }

return output;
}

sliceNew([1,2,3,4,5], -1, -4);







// Take a few minutes to read Array.prototype.concat. Work through the following example:

var original = ['a','b','c'];
var new1 = 'd';
console.log(original.concat(new1));
// ['a','b','c','d']

console.log(original); // unmodified

var new2 = ['e'];
console.log(original.concat(new2));
// ['a','b','c','e']

var new3 = [['f'], 'g'];
console.log(original.concat(new3));
// ['a','b','c',['f'],'g']


// Write a function that has this signature concat(array1, array2) and
 // behaves like the aboveArray.prototype.concat. Refine this function so it is be able to work with a 
 // flexible number of supplied arguments, just like the above code.


conCat = function(originalArr, newArr) {
  var output = [];
  output.push(originalArr, newArr);
  console.log(output);
}

conCat("dog", ["cat", "bird", 27]);
conCat("dog", "cat");
conCat("dog", {herd: "buffalo"})












Take a few minutes to read Ruby's Array#include. Work through the following examples in Ruby 
(since you have macs you can use irb out of the box).

To enter irb, $ irb. To exit irb, exit.
example = [1,2,3,4]
example.include?(4) # true
example.include?(10) # false

otherExample = ['a', 'b', 'c']
otherExample.include?(10) # false
otherExample.include?('b') # true


Next, write the function that has this signature include(array, element) and behaves just like Ruby's Array#include.


inArray = function(arr, value) {
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
        console.log(true); 
    }
  else {
    console.log(false);
  }
}
};

inArray([1,2,3,4,5], 9);


inArray = function(arr, value) {
  var output = '';
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
        output = true; 
        break;
    }
  else {
    output = false;
  }
}
};

inArray([1,2,3,4,5], 9);



OTHER SOLUTION:
for (property in arr) {
  if (arr[i] === value) {
    return true;
  }
  else {
    return false;
  }
}












Take a few minutes to read Array.prototype.toString. Work through the following example:

var example1 = ['This', 'Is', 'An', 'Array', 'Of', 'Strings'];
console.log(example1.toString());
// This,Is,An,Array,Of,Strings

var example2 = [1,2,3,4,5];
console.log(example2.toString());
// 1,2,3,4,5

Next, write the function that has this signature toString(array) and behaves just like Array.prototype.toString.


toString = function(array) {
  output = '';
  for (var i = 0; i < array.length; i++) {
    output += (array[i]) ;
  }
  return output;
}

toString([1,2,3,"dog" ,5]);
