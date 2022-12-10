//How do we assign a value to a variable?
//We assign the variable a name using let such as 'x' then use the = sign to bind it to a Value.

//How do we change the value of a variable?
//We call upon the variable buy name and using the prefix let then post call = and the new IDBCursorWithValue 

//How do we assign an existing variable to a new variable?
//We call upon the variable by name then use the '=' to bind it to the desired variable.
//Remind me, what are declare, assign, and define?
//To declare is synomomis to calling the variable, to assign is to use the '=' or assignment operater to bind said variable to a certain variable, and to define is to be GOD!

//What is pseudocoding and why should you do it?

//Pseudocoding is a way to talk yourself through the steps needed to take to get the wanted results.
//What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?


//Create a variable called firstVariable

//Assign it the value of the string "Hello World"
let firstVariable = "Hello Word";
//Change the value of this variable to some number
firstVariable = 6;
//console.log(firstVariable);
//Store the value of firstVariablein a new variable called secondVariable
 let secondVariable = firstVariable;
//Change the value of secondVariableto any string.
secondVariable = "This is a string"
//What is the value of firstVariable?
//6
//Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
const yourName = "Brandon Smith";
console.log("Hello, my name is " + yourName);
//ex: Hello, my name is Jean Valjean

// Booleans
//Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a < b % c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 ==  '48');

//D. The farm
//1. Declare a variable animal. Set it to be either "cow" or something else
//2. Write code that will print out "mooooo" if the it is equal to cow
//3. Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
//4. Commit

let animal = "cow"

function moo(animal) {
    if (animal == "cow")
    console.log("mooooo");
    else {
        console.log("Hey! You're not a cow.");  
    }
}

moo("cow");
moo("cat");

//E. Driver's Ed
//Make a variable that holds a person's age; be semantic
//Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."


function drive(age) {
    if (age >= 16)
    console.log("Here are the keys!");
    else {
        console.log("Sorry, you're too young.");  
    }
}

drive(20);
drive(13);


//II. Loops

//A. The basics
//Write a loop that will print out all the numbers from 0 to 10, inclusive
//Write a loop that will print out all the numbers from 10 up to and including 400
//Write a loop that will print out every third number starting with 12 and going no higher than 4000

for (let i = 0;i <= 10; i++) {
    console.log(i);
}

for (let i = 10;i <= 400; i++) {
    console.log(i);
}

for (let i = 12;i <= 4001; i+= 3) {
    console.log(i);
}

//B. Get even
//Print out the numbers that are within the range of 1 - 100
//Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for (let i = 1;i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i + "<-- is an even number");
    }
    else {
        console.log(i);
    }
}

//C. Give me Five
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

for (let i = 1;i <= 100; i++) {
    if (i % 15 == 0 ) {
        console.log(`I found a ${i}. High five!` + `I found a ${i}. Three is a crowd`);
        
    }
    else if (i % 5 == 0) {
        console.log(`I found a ${i}. High five!`);
    }
    else if (i % 3 == 0) {
        console.log(`I found a ${i}. Three is a crowd`);

    }
   
}

//D. Savings account
//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
//Check your work! Your bank_account should have $55 in it.

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your bank_account should have $10,100 in it.
let bank_account = 0;

for (let i = 1; i <= 10; i++) {
    bank_account += i;
}

console.log(bank_account);

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your bank_account should have $10,100 in it.

let bank_account2 = 0;

for (let i = 1; i <= 100; i++) {
    bank_account2 += i *2;
}

console.log(bank_account2);

//III. Arrays & Control flow

//A. Talk about it:
//What are the things in an array called?
  // Elements
//Do Arrays guarantee those things will be in order?
    // Yes
//What real-life thing could you model with an array?
    // Movie Collection

//B. Easy Does It
//Create an array that contains three quotes and store it in a variable called quotes

let quotes = ["What's you favorite Scary Movie", "Not the Moma", "I'm Iornman"];

//C. Accessing elements
//Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true]
//How do you access the 1st element in the array
console.log(randomThings[0]);
//Change the value of "Hello"to "World"
randomThings.splice(2, 1, "World");
//Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);

//D. Change values
//Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//What would you write to access the 3rd element of the array?
console.log(ourClass[2]);
//Change the value of "Github" to "Octocat"
ourClass.splice(4, 1, "Octocat");
console.log(ourClass);

//Add a new element, "Cloud City" to the array
ourClass.push("Cloud City")
console.log(ourClass);

//E. Mix It Up
//Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

//Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20]

//Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.

myArray.push("Aegon");
myArray.push("Roll Tide");
//Remove the 5from the beginning of the array.
myArray.shift();
console.log(myArray);
//Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")
//Remove the string of your choice from the end of the array.
myArray.pop();
//Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

myArray.reverse();
console.log(myArray.reverse());
console.log(myArray);
// Yes it did mutate my array

//F. Biggie Smalls
//Create a variable that contains an integer.

num = 3

//Write an if ... elsestatement that:

//console.log()s "little number" if the number is entered is less than 100
//console.log()s big numberif the number is greater than or equal to 100.

if (num < 100) {
    console.log("little number");
}
else if (num > 100) {
    console.log("big number");
}

//G. Monkey in the Middle
//Write an if ... else if ... elsestatement:

//console.log()little numberif the number entered is less than 5.
//If the number entered is more than 10, log big number.
//Otherwise, log "monkey".

if (num < 5) {
    console.log("little number")
}
else if (num > 10) {
    console.log("big number");
}
else {
    console.log("monkey");
}


//H. What's in Your Closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
//Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans")
//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset.splice(5, 1, "stained knit hat")
console.log(kristynsCloset)
//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarry.
console.log(thomsCloset[0][0]);
//In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][1]);
//Access one item from Thom's accessories array.
console.log(thomsCloset[2][2]);
//Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][2]}!`);
//Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
console.log(thomsCloset[1]);

thomsCloset.splice(1, 1,"Footie Pajamas");
console.log(thomsCloset);

//IV. Functions
//A. printGreeting

printGreeting = (myName) =>{
    console.log(`Hi, my name is ${myName}`);
}

printGreeting("Brandon")

//B. printCool

printCool = (name) => {
    console.log(`${name} is one cool dude!`)
}
printCool("Tony Stark")

//C. calculateCube

calculateCube = (n) => {
    console.log(n * n);

}
calculateCube(10);

//D. isVowel

isVowel = (x) => {
    if (x.toLowerCase() == "a" || x.toLowerCase() == "i" || x.toLowerCase() == "e" || x.toLowerCase() == "o" || x.toLowerCase() == "u" || x.toLowerCase() == "y") {
       console.log(true); 
    }
    else {
        console.log(false)
    }
}
isVowel("E")

//E. getTwoLengths

const getTwoLengths = (string1, string2) => {
    // let array = [];
    // length1 = string1.length
    // length2 = string2.length
    // array.push(length1,length2)
    // return array
    return [string1.length, string2.length]

}

console.log(getTwoLengths("Hank", "Hippopopalous"));



//F. getMultipleLengths
//Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string

const getMultipleLengths = arr => {
    let results = []
    arr.forEach(word => results.push(word.length))
    return results
}

console.log(getMultipleLengths(["We","the", "people","Don't tread on me"]))

//G. maxOfThree
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

const maxOfThree = arr => {
    return Math.max(...arr)
}

console.log(maxOfThree([10, 12, 36, 86, 23, 4]))

//H. printLongestWord
//Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

const printLongestWord = arr => {
    arr.sort(function(a, b) { return b.length - a.length; });
  return arr[0];
}

console.log(printLongestWord(["It","was", "told", "to","us","reversed"]))

//Objects

//A. Make a user object
//Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like

const user = {
    name: "Andre",
    email: undefined,
    age: 31,
    purchased: [],

    
}

//B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
user.email="wendsday@gmail.com"
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

user.age += 1

//C. Adding keys and values



// You have decided to add your user's location to the data that you want to collect.
user.location = "New Orleans, Louisiana"
// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

//D. Shopaholic!

// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
user.purchased.push("carbohydrates")
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
user.purchased.push("peace of mind" )
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
user.purchased.push("Merino jodhpurs" )
// Console.log just the "Merino jodhpurs" from the purchasedarray.
console.log("Merino jodhpurs")

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friendwith a nameand age, we could write:

// When we console.log user, we would see the friendobject added to our user object.

// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.

user.friend = {
    name: "Frank,R",
    age: 32,
    location: "Columbus, Georgia",
    purchased:[],
}

console.log(user.friend.name)
console.log(user.friend.location)
user.friend.age = 55
console.log(user.friend.age)
user.friend.purchased.push("The One Ring", "A latte")
console.log(user.friend.purchased)
console.log(user.friend.purchased[1])

// F. Loops

// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

const userPurchased = () => {
    for (let i = 0; i < user.purchased.length; i++) {
        console.log(user.purchased[i])
    }
}

userPurchased()
//Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

const friendPurchased = () => {
    for (let i = 0; i < user.friend.purchased.length; i++) {
        console.log(user.friend.purchased[i])
    }
}

friendPurchased()

// G. Functions can operate on objects

// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.

// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.

const updateUser = () => {
    user.name= user.name.toUpperCase()
    user.age += 1;
}
//updateUser()
console.log(user)

//Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.

const updateUser2 = (obj) => {
    obj.name = obj.name.toUpperCase();
    user.age += 1;
}
updateUser2(user)
console.log(user)