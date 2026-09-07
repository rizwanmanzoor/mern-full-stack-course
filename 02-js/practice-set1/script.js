// **** Data Types & Variables ****
console.log("**** Data Types & Variables ****");

// create variables

console.log("\n");
console.log("1. CREATE 03 VARIABLES");

let name = "rizwan";
let age = 27;
let city = "lahore";

console.log("Name :", name);
console.log("Age :", age);
console.log("City", city);


// check datatype

console.log("\n");
console.log("2. CHECK DATATYPE")

console.log("data type of age :", typeof(age));


// create variables and print typeof each

console.log("\n");
console.log("3. CREATE VARIABLES & PRINT TYPEOF EACH");

let userName = "rizwan";
let userAge = 25;
let isUser = true;
let address = null;
let course;

console.log("typeof userName :", typeof(userName));
console.log("typeof userAge :", typeof(userAge));
console.log("typeof user :", typeof(isUser));
console.log("typeof address :", typeof(address));
console.log("typeof course :", typeof(course));


// STORE A PERSON NAME & CHECK LOGGED IN & PRINT VALUES & DATA TYPES

console.log("\n");
console.log("4. STORE A PERSON NAME & CHECK LOGGED IN & PRINT VALUES & DATA TYPES");

let studentName = "rizwan";
let loggedin = false;

console.log("Student Name: ", studentName, "| Data Type: ", typeof(studentName));
console.log("Loggedin :", loggedin, "| Data Type: ", typeof(loggedin));


// CREATE VARIABLE FOR PRODUCT PRICE & AVAILABILITY, PRINT VALUES & DATA TYPE

console.log("\n");
console.log("5. CREATE VARIABLE FOR PRODUCT PRICE & AVAILABILITY, PRINT VALUES & DATA TYPE");

let productName = "iphone 17";
let productAvailable = true;

console.log("Product :", productName, "| Data Type: ", typeof(productName));
console.log("Available :", productAvailable, "| Data Type: ", typeof(productAvailable));


// CREATE UNDEFINED VARIABLE & CHECK TYPEOF

console.log("\n");
console.log("6. CREATE UNDEFINED VARIABLE & CHECK TYPEOF");

let productPrice;

console.log("Product Price :", productPrice, "| Data Type: ", typeof(productPrice));


// **** Objects — Basic Practice ****
console.log("\n");
console.log("**** Objects — Basic Practice ****");

// CREATE STUDENT OBJECT & PRINT COMPLETE OBJECT

console.log("\n");
console.log("7. CREATE A STUDENT OBJECT & PRINT COMPLETE OBJECT");

let student = {
    name: "rizwan",
    age: 25,
    course: "MERN",
    isPresent: true,
}

console.log("Student :", student);


// CREATE LAPTOP OBJECT & PRINT BRAND & PRICE

console.log("\n");
console.log("8. CREATE A LAPTOP OBJECT & PRINT BRAND & PRICE");

let laptop = {
    barnd: "HP",
    color: "gray",
    ram: "16gb",
    price: 150000
}

console.log("Laptop brand :", laptop.barnd);
console.log("Laptop price :", laptop.price);


// CREATE USER OBJECT & PRINT EACH PROPERTY SEPERATELY

console.log("\n");
console.log("9. CREATE USER OBJECT & PRINT EACH PROPERTY SEPERATELY");

let user = {
    name: "rizwan",
    email: "rizwan@gmail.com",
    isLoggedIn: true,
}

console.log("user name :", user.name);
console.log("user email :", user.email);
console.log("user loggedin :", user.isLoggedIn);


// CREATE MOBILE PHONE OBJECT & PRINT A MESSAGE WITH ITS VALUES

console.log("\n");
console.log("10. CREATE MOBILE PHONE OBJECT & PRINT A MESSAGE WITH ITS VALUES");

let mobilePhone = {
    brand: "apple",
    model: "iphone 17",
    price: "$3000",
    isAvailable: true,
}

console.log(` ${mobilePhone.brand} ${mobilePhone.model} is ${mobilePhone.isAvailable ? "available" : "not available"} in price ${mobilePhone.price}. `);


// CREATE PRODUCT OBJECT & CHECK PRODUCT IN STOCK USING A CONDITION

console.log("\n");
console.log("11. CREATE PRODUCT OBJECT & CHECK PRODUCT IN STOCK USING A CONDITION");

let product = {
    name: "samsung s23",
    price: "$3000",
    stock: 10,
}

if ( product.stock >=1 ) {
    console.log(` ${product.name} is available with price ${product.price}. `);
} else {
    console.log(` ${product.name} is not available. `)
}


// CREATE A MOVIE OBJECT, PRINT THE MOVIE INFORMATION

console.log("\n");
console.log("12. CREATE A MOVIE OBJECT, PRINT THE MOVIE INFORMATION");

let movie = {
    title: "spiderman",
    rating: 4.8,
    isAvailable: true,
}

console.log("Movie Details: ", movie);
console.log(`
    Movie Details: 
    name: ${movie.title}
    rating: ${movie.rating}
    available: ${movie.isAvailable ? "yes" : "not available"}
    `);


// **** Arrays — Basic Practice Only ****
console.log("\n");
console.log("**** Arrays — Basic Practice Only ****");

// CREATE ARRAY OF 5 STUDENT NAMES

console.log("\n");
console.log("13. CREATE ARRAY OF 5 STUDENT NAMES");


let studentNames = [ "bean", "mike", "sara", "ana", "james" ];

console.log("Student Names: ", studentNames);


// CREATE ARRAY OF 5 NUMBERS, PRINT FIRST & LAST ELEMENT

console.log("\n");
console.log("14. CREATE ARRAY OF 5 NUMBERS, PRINT FIRST & LAST ELEMENT");

let numbers = [ 100, 200, 300, 400, 500 ];

console.log(` 
    first element: ${numbers[0]} 
    last element: ${numbers[4]}
    `);


// CREATE AN ARRAY OF THREE PRODUCT NAMES PRINT ARRAY & ONE SELECTED PRODUCT

console.log("\n");
console.log("15. CREATE AN ARRAY OF THREE PRODUCT NAMES PRINT ARRAY & ONE SELECTED PRODUCT");

let products = [ "iphone 17", "samsung s23", "vivo 200" ];

console.log(` 
    products: ${products} 
    selected product: ${products[1]} 
    `)


// CREATE ARRAY CONTAINING BASIC DATA TYPES

console.log("\n");
console.log("16. CREATE ARRAY CONTAINING BASIC DATA TYPES");

let dataTypes = [ 25, "rizwan", true ];

console.log("Data Types", dataTypes);
console.log("Data Types", typeof(dataTypes[0]), typeof(dataTypes[1]), typeof(dataTypes[2]));


// CREATE ARRAY OF 4 PRICES & PRINT ANTY TWO

console.log("\n");
console.log("17. CREATE ARRAY OF 4 PRICES & PRINT ANTY TWO");

let prices = [200, 500, 800, 400];

console.log(prices);
console.log("prices", prices[1], prices[3]);


// CREATE ARRAY OF 3 COLORS PRINT 1ST & 2ND COLOR

console.log("\n");
console.log("18. CREATE ARRAY OF 3 COLORS PRINT 1ST & 2ND COLOR");

let colors = ["red", "green", "blue"];

console.log(colors);
console.log(colors[0], colors[1]);


// **** Arithmetic Operators ****
console.log("\n");
console.log("**** Arithmetic Operators ****");

// CREATE 2 NUMBERS AND SUM, DIFFERENCE, PRODUCT

console.log("\n");
console.log("19,20,21. CREATE 2 NUMBERS AND SUM, DIFFERENCE, PRODUCT");

let num1 = 10;
let num2 = 20;

let sum = num1 + num2;
let difference = num2 - num1;
let multiply = num1 * num2; 

console.log("number 1: ", num1, "number 2 :", num2);
console.log("sum: ", sum);
console.log("difference: ", difference);
console.log("product: ", multiply);


// CREATE A TOTAL BILL AMOUNT & NUMBER OF PEOPLE. CALCULATE HOW MUCH EACH PERSON PAY USING /

console.log("\n");
console.log("22. CREATE A TOTAL BILL AMOUNT & NUMBER OF PEOPLE. CALCULATE HOW MUCH EACH PERSON PAY USING /");

let totalBill = 1800;
let people = 4;

let pay = totalBill / people;
let amount = pay;

console.log("total bill amount: ", totalBill, "total people: ", people);
console.log("amount payable by each person: ", amount);

// CREATE A NUMBER CHECK ITS REMINDER WHEN DEVIDED BY 2 USING %

console.log("\n");
console.log("23. CREATE A NUMBER CHECK ITS REMINDER WHEN DEVIDED BY 2 USING %");

let remNum = 20;
let rem = remNum % 2;

console.log("20 % 2 : ", rem);


// CALCULATE TOTAL PRICE OF 4 NOTEBOOKS IF ONE IS 75

console.log("\n");
console.log("24. CALCULATE TOTAL PRICE OF 4 NOTEBOOKS IF ONE IS 75")

let oneNotebook = 75;
let totalNotebooks = oneNotebook * 4;

console.log("total price of 4 notebooks: ", totalNotebooks);


// CALCULATE FINAL AMOUNT AFTER SPENDING 350 FROM BALANCE 1000

console.log("\n");
console.log("25. CALCULATE FINAL AMOUNT AFTER SPENDING 350 FROM BALANCE 1000");

const balanceAmount = 1000;
const spendAmount = 350;

const finalAmount = balanceAmount - spendAmount;

console.log("final amount: ", finalAmount);


// USE ** OPERATOR TO CALCULATE 2 RAISED POWER OF 5

console.log("\n");
console.log("26. OPERATOR TO CALCULATE 2 RAISED POWER OF 5");

let oprNum = 2**5;

console.log("2^5 : ", oprNum);


// **** Assignment Operators ****
console.log("\n");
console.log("**** Assignment Operators ****");

// CREATE SCORE = 10, INCREASE SCORE BY 5 USING ASSIGNMENT OPERATOR

console.log("\n");
console.log("27. CREATE SCORE = 10, INCREASE SCORE BY 5 USING ASSIGNMENT OPERATOR");

let score = 10;
let newScore = score += 5;

console.log("new score(score+=5): ", newScore);

// CREATE BALANCE = 1000, DECREASE THE BALANCE BY 250 USING ASSIGNMENT OPERATOR

console.log("\n");
console.log("28. CREATE BALANCE = 1000, DECREASE THE BALANCE BY 250 USING ASSIGNMENT OPERATOR");

let balance = 1000;
let newBalance = balance -= 250;

console.log("new balance(balance-=250): ", newBalance);


// CREATE NUMBER = 5, MULTIPLY IT BY 3 USING ASSIGNMENT OPERATOR

console.log("\n");
console.log("29. CREATE NUMBER = 5, MULTIPLY IT BY 3 USING ASSIGNMENT OPERATOR");

let multiNum = 5;
let multiRes = multiNum *= 3;

console.log("multiplied number(multiNum*=3)", multiRes);


// CREATE TOTAL = 100, DIVIDED IT BY 4 USING ASSIGNMENT OPERATOR

console.log("\n");
console.log("30. CREATE TOTAL = 100, DIVIDED IT BY 4 USING ASSIGNMENT OPERATOR");

let total = 100;
let totalRes = total /= 4;

console.log("total number(total/=4): ", totalRes);


// **** Comparison & Equality ****
console.log("\n");
console.log("**** Comparison & Equality ****");

// CREATE TWO NUMBERS CHECK FIRST NUMBER IS GREATER THAN THE SECOND

console.log("\n");
console.log("31. CREATE TWO NUMBERS CHECK FIRST NUMBER IS GREATER THAN THE SECOND");

const num01 = 15;
const num02 = 10;
const result = num01 > num02

console.log("num1 is greater than num2: ", result);


// CREATE AGE VARIALBLE CHECK AGE IS GREATER THAN OR EQUAL TO 18

console.log("\n");
console.log("32. CREATE AGE VARIALBLE CHECK AGE IS GREATER THAN OR EQUAL TO 18");

const age01 = 19;
const resultAge = age01 >= 18;

console.log("age >= 18: ", resultAge);


// COMPARE '10' AND 10 USING == PRINT RESULT

console.log("\n");
console.log("33,34. COMPARE '10' AND 10 USING == PRINT RESULT");

const nm1 = '10';
const nm2 = 10;

console.log("compare '10' == 10 : ", nm1 == nm2);
console.log("compare '10' === 10 : ", nm1 === nm2);


// CREATE TWO VARIABLES WITH SAME VALUE & CHECK USING '==='

console.log("\n");
console.log("35. CREATE TWO VARIABLES WITH SAME VALUE & CHECK USING '==='");

const number01 = 7;
const number02 = 7;

console.log("7 === 7 : ", number01 === number02);


// CREATE TWO DIFFERENT NUMBERS, CHECK WHETHER THEY ARE NOT EQUAL USING COMPARISON OPERATOR

console.log("\n");
console.log("36. CREATE TWO DIFFERENT NUMBERS, CHECK WHETHER THEY ARE NOT EQUAL USING COMPARISON OPERATOR");

const num03 = 7;
const num04 = 5;

console.log("7 !== 5", num03 !== num04);


// **** Type Conversion ****
console.log("\n");
console.log("**** Type Conversion ****");

// CONVERT STRING '100' INTO NUMBER AND ADD 50 TO IT

console.log("\n");
console.log("37. CONVERT STRING '100' INTO NUMBER AND ADD 50 TO IT");

const num05 = '100';
const resNum05 = Number(num05) + 50;

console.log("Number(100) + 50 : ", resNum05);

// CONVERT NUMBER 500 INTO STRING & CHECK TYPE USING TYPEOF

console.log("\n");
console.log("38. CONVERT NUMBER 500 INTO STRING & CHECK TYPE USING TYPEOF");

const num06 = 500;
const resNum06 = num06.toString();

console.log("500.toString():", resNum06, "| type:", typeof(resNum06));


// PRODUCT PRICE '999', CONVERT INTO NUMBER & CALCULATE FINAL PRICE AFTER ADDING 100

console.log("\n");
console.log("39. PRODUCT PRICE '999', CONVERT INTO NUMBER & CALCULATE FINAL PRICE AFTER ADDING 100");

const prodPrice = '999';
const newPrice = Number(prodPrice) + 100;

console.log("Number(999)+100:", newPrice);


// CONVERT A NUMERIC STRING INTO A NUMBER & COMPARE THE CONVERTED VALUE WITH ANOTHER NUMBER USING '==='

console.log("\n");
console.log("40. CONVERT A NUMERIC STRING INTO A NUMBER & COMPARE THE CONVERTED VALUE WITH ANOTHER NUMBER USING '==='");

const num07 = '500';
const resNum07 = Number(num07);

console.log("Number(500) === 500", resNum07 === 500);


// **** Logical Operators ****
console.log("\n");
console.log("**** Logical Operators ****");

// Create isLoggedIn = true and isVerified = true. Use && to check whether both conditions are true.

console.log("\n");
console.log("41. Create isLoggedIn = true and isVerified = true. Use && to check whether both conditions are true.");

const isLoggedIn = true;
const isVerified = true;

if (isLoggedIn && isVerified) {
    console.log("isLoggedIn && isVerified, both conditions are true ");
}


// Create hasTicket = false and isVIP = true. Use || to check whether entry is possible.

console.log("\n");
console.log("42. Create hasTicket = false and isVIP = true. Use || to check whether entry is possible.");

const hasTicket = false;
const isVIP = true;

if(hasTicket || isVIP) {
    console.log("hasTicket || isVIP : entry is possible");
}


// Create isBlocked = false. Use ! to check whether the user is not blocked.

console.log("\n");
console.log("43. Create isBlocked = false. Use ! to check whether the user is not blocked.");

const isBlocked = false;

if (!isBlocked) {
    console.log("!isBlocked : user is not blocked");
}


// Create age = 20 and hasID = true. A person is eligible only when both conditions are true. Write the condition.

console.log("\n");
console.log("44. Create age = 20 and hasID = true. A person is eligible only when both conditions are true. Write the condition.");

const age1 = 20;
const hasID = true;

if( age1 >= 18 && hasID ) {
    console.log("age >= 18 && hasID : user is eligible");
}


// Create hasMoney = true and hasCard = false. Check whether the user can make a purchase using ||.

console.log("\n");
console.log("45. Create hasMoney = true and hasCard = false. Check whether the user can make a purchase using ||.");

const hasMoney = true;
const hasCard = false;

if ( hasMoney || hasCard ) {
    console.log("hasMoney || hasCard : user can make a purchase");
}


// **** Conditional Statements ****
console.log("\n");
console.log("**** Conditional Statements ****");


// Create an age variable. Print You can vote if age is 18 or above; otherwise print You cannot vote.

console.log("\n");
console.log("46. Create an age variable. Print You can vote if age is 18 or above; otherwise print You cannot vote.");

const voteAge = 19;

if( voteAge >= 18 ) {
    console.log("you can vote");
} else {
    console.log("you cannot vote");
}


// Create a number. Print whether it is Positive, Negative, or Zero.

console.log("\n");
console.log("47. Create a number. Print whether it is Positive, Negative, or Zero.");

const number = 5;

if ( number > 0 ) {
    console.log("number is positive");
} else if ( number < 0 ) {
    console.log("number is negative");
} else {
    console.log("number is zero")
}


// Create a number and use % with if-else to print whether it is Even or Odd.

console.log("\n");
console.log("48. Create a number and use % with if-else to print whether it is Even or Odd.");

const number03 = 7;

if ( number03 % 2 === 0 ) {
    console.log("number is even");
} else {
    console.log("number is odd");
}


// Create marks. Print Pass if marks are 40 or above; otherwise print Fail.

console.log("\n");
console.log("49. Create marks. Print Pass if marks are 40 or above; otherwise print Fail.");

const marks = 43;

if ( marks >= 40 ) {
    console.log("pass");
} else {
    console.log("fail");
}


// Create marks and print: A for 90+, B for 75–89, C for 60–74, otherwise D.

console.log("\n");
console.log("50. Create marks and print: A for 90+, B for 75–89, C for 60–74, otherwise D.");

const marks01 = 83;

if ( marks01 >= 90 ) {
    console.log("A");
} else if ( marks01 >= 75 && marks01 < 90 ) {
    console.log("B");
} else if ( marks01 >= 60 && marks01 < 75 ) {
    console.log("C");
} else {
    console.log("D");
}


// Create a shopping amount. If it is 2000 or more, print Discount Available; otherwise print No Discount.

console.log("\n");
console.log("51. Create a shopping amount. If it is 2000 or more, print Discount Available; otherwise print No Discount.");

const shopAmount = 5000;

if ( shopAmount >= 2000 ) {
    console.log("discount available");
} else {
    console.log("no discount");
}


// Create isRaining. If it is true, print Take an umbrella; otherwise print No umbrella needed.

console.log("\n");
console.log("52. Create isRaining. If it is true, print Take an umbrella; otherwise print No umbrella needed.");

const isRaining = true;

if ( isRaining ) {
    console.log("take an umbrella");
} else {
    console.log("no umbrella needed");
}


// Create isLoggedIn and isAdmin. If both are true print Admin Dashboard. If only logged in is true print User Dashboard. Otherwise print Please Login.

console.log("\n");
console.log("53. Create isLoggedIn and isAdmin. If both are true print Admin Dashboard. If only logged in is true print User Dashboard. Otherwise print Please Login.");

const isLoggedInn = true;
const isAdminn = false;

if ( isLoggedInn && isAdminn ) {
    console.log("admin dashboard");
} else if ( isLoggedInn ) {
    console.log("user dashboard");
} else {
    console.log("please login");
}


// Create age and hasLicense. A person can drive only when age is 18 or above and they have a license. Print the appropriate message.

console.log("\n");
console.log("54. Create age and hasLicense. A person can drive only when age is 18 or above and they have a license. Print the appropriate message.");

const age001 = 18;
const hasLicense = true;

if ( age001 >= 18 && hasLicense ) {
    console.log(`you are ${age001} years old and have valid license so you can drive.`);
} else {
    console.log("you cannot drive.")
}


// Create productStock. If stock is greater than 0, print Product Available; otherwise print Out of Stock.

console.log("\n");
console.log("55. Create productStock. If stock is greater than 0, print Product Available; otherwise print Out of Stock.");

const productStock = 12;

if ( productStock > 0 ) {
    console.log("product available");
} else {
    console.log("out of stock");
}

