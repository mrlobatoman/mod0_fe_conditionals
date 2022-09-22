// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log("is numberTeachers less than numberStudents?", numberTeachers < numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log("is numberTeachers strictly equal to stringTeachers?", numberTeachers = stringTeachers);
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("is numberTeachers not equal to numberStudents?", numberTeachers != numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("is numberStudents greater than or equal to 20?", numberStudents >= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("is numberStudents greater than or equal to 21?", numberStudents >= 21);
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("is numberStudents less than or equal to 20?", numberStudents <= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("is numberStudents less than or equal to 21?", numberStudents <= 21);
// this should log: true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
//Is 4 less than 9?
//this should log true

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
//var books has a quantity of 3. Is the quantity of 4 less than the quantity of books(3)?
//this should log false.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
//variable "friends" has a quantity of 6.
//variable of "siblings" has a quantity of 2.
//is the quantity of friends(6), greater than the quantity of siblings(2)?
//this should log true.

var attendees = 9;
var meals = 8;
console.log(attendees != meals);
// YOU DO: Explain.
//variable "attendees" has the quantity of 9.
//variable of "meals" has the quantity of 8.
//is attendees(9) not equal to meals(8)?
//this should log true


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
//user has not completed their homework.
//this should log false.
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);
//one of the statements is true
//this should log true

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);
//this should log true

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);
//this should log false


// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark)
//this should log true


// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age)

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
//logged as 1
//Because even though the prompt was a conditional, the var "age" has a numerical value instead of a true or false.
//This resulted in JS resorting to logging the numerical value.
