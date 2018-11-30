



//1. Write a console.log statement saying "Hello World!" for each language that you know.

console.log("Hello World");
console.log("Hola Mundo!");
console.log("Bonjour Monde!");

//2. Copy the code in your .js file and run it. You will see that you will get a SyntaxError. Find a solution for this error. Hint: read the error message carefully, it also gives an indication of where the problem is.

console.log("I'm awesome");

console.log("I'm awesome");

//3. Declare a variable x and initialize it with an integer, using these exact steps:
// 3.3 Add a console.log statement that logs the value of x.
// 3.4 Now initialize your variable x with an integer.
// 3.5 Next, add a console.log statement that explains what you think the value of x is.
// 3.6 Add a console.log statement that logs the value of x. Steps to be taken:

console.log('the value of my variable x will be: typeof number');
var x;
x = 6; 
console.log(x); 

// 4. Declare a variable y and assign a string to it.
// 4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
// 4.2 Now console.log the variable y.
// 4.3 Now assign a new string to the variable y.
// 4.4 Just like you did before write a console.log statement that explains in words what you think will be logged to the console.
// 4.5 Now console.log y again.

console.log('the value of my string is typeof string');
var y = "hello";
console.log(y);
var y = "hello again";
console.log('the value of my string is typeof string');
console.log(y);

// 5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?
// 5.1 Declare a variable z and assign the number 7.25 to it.
// 5.2 Console.log z.
// 5.3 Declare another variable a that has the value of z but rounded to the nearest integer.
// 5.4 Console.log a.
// 5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
// 5.6 Console.log the highest value.

var z = 7.25;
console.log(z);
var a = 7; 
console.log(a);
var lowestNumber;
if (a < z) {
  lowestNumber = a;
} else {
  lowestNumber = z;
};
console.log(lowestNumber);

// 6. Arrays!
// 6.1 Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element. (See Naming conventions.)
// 6.2 Write a console.log statement that explains in words what you think the value of the array is.
// 6.3 Console.log your array.
// 6.4 Create an array that has your favorite animals inside (see if you can find a good name that exactly describes what this variable will hold).
// 6.5 Log your array.
// 6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.
// 6.7 Log your new array!

var plurality = [];
console.log('the value of the array can be multiple values stored in one single variable');
console.log(plurality);

var favAnimals = ["dogs", "cats", "chamaleon"];
console.log(favAnimals);
favAnimals.push("baby pig");
console.log(favAnimals);

// 7. More strings
// 7.1 Let's consider the following string: let myString = "this is a test".
// 7.2 Add the string to your file and console.log it.
// 7.3 Find a way to get the length of myString.
// 7.4 Console.log the length of myString.

let myString = "this is a test";
console.log(myString);
console.log(myString.length);

// 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
// 8.1 First declare at least four variables and assign them different data types.
// 8.2 For each variable write a console.log statement that logs the value

let firstName = "Juan";
let lastName = "Romero";
let doYouLiveInBelgium = false;
let age = 27;

console.log(firstName);
console.log(lastName);
console.log(doYouLiveInBelgium);
console.log(age);

// 8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
// 8.4 Now use typeof to log the actual type of your variables.
// 8.5 Now compare the types of your different variables with one another.
// 8.6 Make sure to also show a message when the variables you are comparing are not the same type.

console.log('The type of variables I have are strings, a boolean, and a number');

console.log (typeof "Juan");
console.log (typeof "Romero");
console.log (typeof false);
console.log (typeof 27);

if (typeof firstName === typeof lastName) {
        console.log('SAME TYPE');
    }else{
    console.log('NOT SAME TYPE');
    };

    //the variables below are not the same type; 
if (typeof doYouLiveInBelgium === typeof age) {
        console.log('SAME TYPE');
    }else{
    console.log('NOT SAME TYPE');
    };

if (typeof age === typeof doYouLiveInBelgium) {
        console.log('SAME TYPE');
    }else{
    console.log('NOT SAME TYPE');
    };

    // 9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?

// The value of x would be 7%3 = 1 

    // 9.1 Add at least 3 console.log statements in which you show that you understand what % does.
    
let x = 7;
let x %= 3;
console.log(x); 

let x = 8;
let x %= 5;
console.log(x); 

let x = 10;
let x %= 4;
console.log(x); 

//for some reason it says there is an error when I add the % sign. It's not recognizing it. 

    // 10. Write a program to answer the following questions:
    // 10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.

let favThings = ["dogs", 6, false, true, 45, "sky", "net"];

    // 10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?


    // 10.3 Add console.log statements to the above program's in which you show that you understand the concepts (just like you've done in the above assignments).

    
        console.log(typeof(array12));
        console.log( 6/0 === 10/0);
