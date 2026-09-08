// **** Part 1: Function Basics ****
console.log("**** Part 1: Function Basics ****");

// Create a function greet() that prints 'Welcome to Code Ki Pathshala'.

console.log("\n");
console.log("1. Create a function greet() that prints 'Welcome to Code Ki Pathshala'.");

function greet() {
    console.log("Welcome to Code Ki Pathshala");
}

greet();


// Create a function sayHello() and call it three times.

console.log("\n");
console.log("2. Create a function sayHello() and call it three times.");

function sayHello() {
    console.log("say hello");
}

sayHello();
sayHello();
sayHello();


// Create an arrow function that prints your name.

console.log("\n");
console.log("3. Create an arrow function that prints your name.");

const nameFunction = () => {
    console.log("Rizwan");
}

nameFunction();


// Create a function showCity() that prints your city.

console.log("\n");
console.log("4. Create a function showCity() that prints your city.");

function showCity() {
    console.log("Lahore");
}

showCity();

// Create a function showCourse() that prints your course.

console.log("\n");
console.log("5. Create a function showCourse() that prints your course.");

function showCourse() {
    console.log("MERN Course");
}

showCourse();


// **** Part 2: Parameters & Arguments ****
console.log("\n");
console.log("**** Part 2: Parameters & Arguments ****");

// Create printName(name) and print the name.

console.log("\n");
console.log("6. Create printName(name) and print the name.");

function printName(name) {
    console.log(name);
}

printName("Rizwan");


// Create printAge(age) and print the age.

console.log("\n");
console.log("7. Create printAge(age) and print the age.");

function printAge(age) {
    console.log(age);
}

printAge(25);


// Create printCity(city) and print the city.

console.log("\n");
console.log("8. Create printCity(city) and print the city.");

function printCity(city) {
    console.log(city);
}

printCity("Lahore");


// Create greetUser(name) that prints Welcome + name.

console.log("\n");
console.log("9. Create greetUser(name) that prints Welcome + name.");

function greetUser(name) {
    console.log("Welcome " + name);
}

greetUser("Rizwan");


// Call the same function with 5 different names.

console.log("\n");
console.log("10. Call the same function with 5 different names.");

greetUser("Abhishek");
greetUser("Sunny");
greetUser("Abhi");
greetUser("Mannat");
greetUser("Sunil");


// **** Part 3: Conditions Inside Functions ****
console.log("\n");
console.log("**** Part 3: Conditions Inside Functions ****");

// Create checkAge(age) that checks voting eligibility.

console.log("\n");
console.log("11. Create checkAge(age) that checks voting eligibility.");

function checkAge(age) {
    if ( age >= 18 ) {
        console.log(`your age is ${age}, you are eligible for voting.`);
    } else {
        console.log(`your age is ${age}, sorry you are not eligible for voting.`);
    }
}

checkAge(18);


// Pass 5 different ages to the function.

console.log("\n");
console.log("12. Pass 5 different ages to the function.");

function multiAges(age1, age2, age3, age4, age5) {
    console.log(` age-1 : ${age1} , age-2 : ${age2} , age-3 : ${age3} , age-4 : ${age4} , age-5 : ${age5} `);
}

multiAges(24, 28, 18, 32, 21);


// Create checkDriving(age) that checks driving eligibility.

console.log("\n");
console.log("13. Create checkDriving(age) that checks driving eligibility.");

function checkDriving(age) {
    if ( age >= 18 ) {
        console.log("you are eligible for driving");
    } else {
        console.log("sorry, you are no eligible for driving");
    }
}

checkDriving(18);


// Create checkPass(marks) that prints Pass or Fail.

console.log("\n");
console.log("14. Create checkPass(marks) that prints Pass or Fail.");

function checkPass(marks) {
    if (marks >= 33) {
        console.log("congratulations you pass");
    } else {
        console.log("sorry you fail");
    }
}

checkPass(33);


// Create checkEvenOdd(number).

console.log("\n");
console.log("15. Create checkEvenOdd(number).");

function checkEvenOddNumber(number) {
    if ( number % 2 === 0 ) {
        console.log(` ${number} is an even number `);
    } else {
        console.log(` ${number} is an odd number `);
    }
}

checkEvenOddNumber(69);


// **** Part 4: Return Keyword ****
console.log("\n");
console.log("**** Part 4: Return Keyword ****");

// Create sum(a,b) and return the result.

console.log("\n");
console.log("16. Create sum(a,b) and return the result.");

function sum(a,b) {
    return a+b;
}

let result = sum(5,4);
console.log("5+4 = ", result);


// Create subtract(a,b) and return the result.

console.log("\n");
console.log("17. Create subtract(a,b) and return the result.");

function subtract(a,b) {
    return a-b;
}

let result2 = subtract(10,5);
console.log("10-5 = ", result2);


// Create multiply(a,b) and return the result.

console.log("\n");
console.log("18. Create multiply(a,b) and return the result.");

function multiply(a,b) {
    return a*b;
}

let result3 = multiply(4,3);
console.log("4*3 = ", result3)


// Create divide(a,b) and return the result.

console.log("\n");
console.log("19. Create divide(a,b) and return the result.");

function divide(a,b) {
    return b/a;
}

let result4 = divide(5,10);
console.log("10/5 = ", result4);


// Store the returned value in a variable and print it.

console.log("\n");
console.log("20. Store the returned value in a variable and print it.");

function storedValue(val) {
    return val;
}

let result5 = storedValue(12);
console.log(result5);


// **** Part 5: Operators + Functions ****
console.log("\n");
console.log("**** Part 5: Operators + Functions ****");

// Create calculateBill(price, quantity).

console.log("\n");
console.log("21. Create calculateBill(price, quantity).");

function calculateBill(price, quantity) {
    return price*quantity;
}

let totalBill = calculateBill(100, 5);
console.log("Total Bill 100*5 :", totalBill);


// Create calculateDiscount(price).

console.log("\n");
console.log("22. Create calculateDiscount(price).");

function calculateDiscount(price) {
    return price * (10/100);
}

let discount = calculateDiscount(100);
console.log("10% discount price of 100 :", discount);


// Create calculatePower(a,b) using **.

console.log("\n");
console.log("23. Create calculatePower(a,b) using **.");

function calculatePower(a,b) {
    return a**b;
}

let power = calculatePower(2,4);
console.log("2**4 =", power);


// Create checkRemainder(number).

console.log("\n");
console.log("24. Create checkRemainder(number).");

function checkRemainder(number) {
    return number % 2;
}

let remainder = checkRemainder(5);
console.log("remainder of 5 :", remainder);


// Create compareNumbers(a,b) and print the larger number.

console.log("\n");
console.log("25. Create compareNumbers(a,b) and print the larger number.");

function compareNumbers(a,b) {
   if (a>b) {
    return a;
   } else {
    return b;
   }
}

let largerNumber = compareNumbers(15,70);
console.log(largerNumber);


// **** Part 6: Objects + Functions ****
console.log("\n");
console.log("**** Part 6: Objects + Functions ****");

// Create a student object and print the student's name using a function.

console.log("\n");
console.log("26. Create a student object and print the student's name using a function.");

let student = {
    name: "rizwan",
}

function printName(student) {
    return student.name;
}

let studentName = printName(student);
console.log(studentName);


// Create a laptop object and print its brand using a function.

console.log("\n");
console.log("27. Create a laptop object and print its brand using a function.");

const laptop = {
    brand: "HP",
}

function printBrandName(laptop) {
    return laptop.brand;
}

const brandName = printBrandName(laptop);
console.log(brandName);


// Create a user object and print the email using a function.

console.log("\n");
console.log("28. Create a user object and print the email using a function.");

const user = {
    email: "rizwan@gmail.com",
}

function getEmail(user) {
    return user.email;
}

let userEmail = getEmail(user);
console.log(userEmail);


// Create a product object and print its price.

console.log("\n");
console.log("29. Create a product object and print its price.");

const product = {
    price: 500,
}

const productPrice =  product.price;
console.log(productPrice);


// Create a movie object and print its title.

console.log("\n");
console.log("30. Create a movie object and print its title.");

const movie = {
    title: "Spiderman 3",
}

const movieName = movie.title;
console.log(movieName);


// **** Part 7: Arrays + Functions (Basic) ****
console.log("\n");
console.log("**** Part 7: Arrays + Functions (Basic) ****");

// Create an array of names and print the first name using a function.

console.log("\n");
console.log("31. Create an array of names and print the first name using a function.");

const names = ["rizwan", "sunny", "john"];

function getFirstName(names) {
    return names[0];
}

const name = getFirstName(names);
console.log(name);


// Create an array of colors and print the second color.

console.log("\n");
console.log("32. Create an array of colors and print the second color.");

const colors = ["red", "green", "blue", "orange"];

function getColor(colors) {
    return colors[1];
}

const color = getColor(colors);
console.log(color);


// Create an array of prices and print the first price.

console.log("\n");
console.log("33. Create an array of prices and print the first price.");

const prices = [200, 500, 700, 300];

const firstPrice = prices[0];
console.log(firstPrice);


// Pass an array element to a function and print it.

console.log("\n");
console.log("34. Pass an array element to a function and print it.");

const arr = ["rizwan", 25, "blue"];

function getArr(arr) {
    return arr[0];
}

const arrElement = getArr(arr);
console.log(arrElement);


// Create an array of cities and print any city.

console.log("\n");
console.log("35. Create an array of cities and print any city.");

const cities = ["Lahore", "Delhi", "New York"];
const city = cities[2];
console.log(city);


// **** Part 8: Real-World Problems ****
console.log("\n");
console.log("**** Part 8: Real-World Problems ****");

// Create checkLogin(isLoggedIn) and print Login Success or Login Required.

console.log("\n");
console.log("36. Create checkLogin(isLoggedIn) and print Login Success or Login Required.");

const isLoggedIn = true;

function checkLogin(isLoggedIn) {
    if (isLoggedIn) {
        console.log("Login Success");
    } else {
        console.log("Login Required");
    }
}

checkLogin(isLoggedIn);


// Create checkAdmin(isLoggedIn, isAdmin).

console.log("\n");
console.log("37. Create checkAdmin(isLoggedIn, isAdmin).");

const isAdmin = true;

function checkAdmin(isLoggedIn, isAdmin) {
    if (isLoggedIn && isAdmin) {
        console.log("Login as admin");
    } else {
        console.log("Login required");
    }
}

checkAdmin(isLoggedIn, isAdmin);


// Create checkTemperature(temp) and print Hot, Normal or Cold.

console.log("\n");
console.log("38. Create checkTemperature(temp) and print Hot, Normal or Cold.");

const temp = 12;

function checkTemperature(temp) {
    if (temp > 30) {
        console.log("hot");
    } else if (temp <= 30 && temp >= 20) {
        console.log("normal");
    } else {
        console.log("cold");
    }
}

checkTemperature(temp);


// Create checkStock(stock) and print Product Available or Out of Stock.

console.log("\n");
console.log("39. Create checkStock(stock) and print Product Available or Out of Stock.");

const stock = 5;

function checkStock(stock) {
    if (stock > 0) {
        console.log("product available");
    } else {
        console.log("out of stock");
    }
}

checkStock(stock);


// Create checkDelivery(amount) and print Free Delivery or Delivery Charges.

console.log("\n");
console.log("40. Create checkDelivery(amount) and print Free Delivery or Delivery Charges.");

const amount = 1001;

function checkDelivery(amount) {
    if (amount > 1000) {
        console.log("free delivery");
    } else {
        console.log("delivery charges");
    }
}

checkDelivery(amount);




