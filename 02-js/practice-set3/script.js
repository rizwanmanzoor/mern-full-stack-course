// **** FOR LOOP — BASIC ****
console.log("**** FOR LOOP — BASIC ****");

// Print numbers from 1 to 10 using a for loop.

console.log("\n");
console.log("1. Print numbers from 1 to 10 using a for loop.");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Print numbers from 10 to 1 using a for loop.

console.log("\n");
console.log("2. Print numbers from 10 to 1 using a for loop.");

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Print numbers from 5 to 20.

console.log("\n");
console.log("3. Print numbers from 5 to 20.");

for (let i = 5; i <= 20; i++) {
  console.log(i);
}

// Print all even numbers from 1 to 20.

console.log("\n");
console.log("4. Print all even numbers from 1 to 20.");

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Print all odd numbers from 1 to 20.

console.log("\n");
console.log("5. Print all odd numbers from 1 to 20.");

for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// Print numbers from 20 to 10 in decreasing order.

console.log("\n");
console.log("6. Print numbers from 20 to 10 in decreasing order.");

for (let i = 20; i >= 10; i--) {
  console.log(i);
}

// Print the multiplication table of 5 from 1 to 10.

console.log("\n");
console.log("7. Print the multiplication table of 5 from 1 to 10.");

for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}

// Calculate the sum of numbers from 1 to 10.

console.log("\n");
console.log("8. Calculate the sum of numbers from 1 to 10.");

let total = 0;

for (let i = 1; i <= 10; i++) {
  total += i;
}

console.log(total);

// Print numbers between 1 and 30 that are divisible by 3.

console.log("\n");
console.log("9. Print numbers between 1 and 30 that are divisible by 3.");

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Print the squares of numbers from 1 to 5.

console.log("\n");
console.log("10. Print the squares of numbers from 1 to 5.");

for (let i = 1; i <= 5; i++) {
  console.log(i ** 2);
}

// **** WHILE LOOP ****
console.log("\n");
console.log("**** WHILE LOOP ****");

// Print numbers from 1 to 10 using while.

console.log("\n");
console.log("11. Print numbers from 1 to 10 using while.");

let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

// Print numbers from 20 to 10 using while.

console.log("\n");
console.log("12. Print numbers from 20 to 10 using while.");

let k = 20;
while (k >= 10) {
  console.log(k);
  k--;
}

// Print all even numbers from 2 to 20 using while.

console.log("\n");
console.log("13. Print all even numbers from 2 to 20 using while.");

let l = 2;
while (l <= 20) {
  console.log(l);
  l += 2;
}

// Calculate the sum of numbers from 1 to 10 using while.

console.log("\n");
console.log("14. Calculate the sum of numbers from 1 to 10 using while.");

let sum = 0;
let m = 1;

while (m <= 10) {
  sum += m;
  m++;
}

console.log(sum);

// Start with x = 50 and print values down to 40.

console.log("\n");
console.log("15. Start with x = 50 and print values down to 40.");

let x = 50;

while (x >= 40) {
  console.log(x);
  x--;
}

// Start with x = 1 and print values up to 15.

console.log("\n");
console.log("16. Start with x = 1 and print values up to 15.");

let num = 1;

while (num <= 15) {
  console.log(num);
  num++;
}

// Print the multiplication table of 7 from 1 to 10 using while.

console.log("\n");
console.log(
  "17. Print the multiplication table of 7 from 1 to 10 using while.",
);

let mul = 1;
while (mul <= 10) {
  console.log(mul * 7);
  mul++;
}

// Print numbers from 1 to 20 but skip 10.

console.log("\n");
console.log("18. Print numbers from 1 to 20 but skip 10.");

let numm = 1;

while (numm <= 20) {
  if (numm === 10) {
    numm++;
    continue;
  }

  console.log(numm);
  numm++;
}


// **** DO...WHILE ****
console.log("\n");
console.log("**** DO...WHILE ****");

// Use do...while to print numbers from 1 to 5.

console.log("\n");
console.log("19. Use do...while to print numbers from 1 to 5.");

let num1 = 1;

do {
    console.log(num1);
    num1++;
} while (num1 <= 5)


// Use do...while to print numbers from 10 to 1.

console.log("\n");
console.log("20. Use do...while to print numbers from 10 to 1.");

let num2 = 10;

do {
    console.log(num2);
    num2--;
} while (num2 >= 1)


// Use do...while to print the first 10 natural numbers.

console.log("\n");
console.log("21. Use do...while to print the first 10 natural numbers.");

let num3 = 1;

do {
    console.log(num3);
    num3++;
} while (num3 <= 10)


// Use do...while to print even numbers from 2 to 20.

console.log("\n");
console.log("22. Use do...while to print even numbers from 2 to 20.");

let num4 = 2;

do {
    console.log(num4);
    num4 += 2;
} while (num4 <= 20)


// Use do...while to calculate the sum from 1 to 5.

console.log("\n");
console.log("23. Use do...while to calculate the sum from 1 to 5.");

let num5 = 1;
let totals = 0;

do {
totals += num5;
num5++;
} while (num5 <= 5)

console.log(totals);


// Print 1 to 10 but skip 7 using continue.

console.log("\n");
console.log("24. Print 1 to 10 but skip 7 using continue.");

let num6 = 1;

do {
    if (num6 === 7) {
        num6++;
        continue;
    }

    console.log(num6);
    num6++;
} while (num6 <= 10);


// **** ARRAYS — BASIC ****
console.log("\n");
console.log("**** ARRAYS — BASIC ****");

// Create an array of 5 student names and print it.

console.log("\n");
console.log("25. Create an array of 5 student names and print it.");

const students = [ "rizwan", "sunil", "john", "sara", "abhi" ];
console.log(students);


// Create an array of 5 numbers and print its length.

console.log("\n");
console.log("26. Create an array of 5 numbers and print its length.");

const numbers = [ 1, 2, 3, 4, 5 ]
console.log(numbers.length);


// Create an array of 5 colors and print the element at index 2.

console.log("\n");
console.log("27. Create an array of 5 colors and print the element at index 2.");

const colors = [ "red", "green", "blue", "orange", "pink" ];
console.log(colors[1]);


// Print the first and last element of an array.

console.log("\n");
console.log("28. Print the first and last element of an array.");

console.log("first element", colors[0], "last element", colors[4]);


// Create an array of 4 products and print each using a for loop.

console.log("\n");
console.log("29. Create an array of 4 products and print each using a for loop.");

const products = [ "iphone", "samsung", "vivo", "nokia" ];

for ( let p=0; p<products.length; p++ ) {
    console.log(products[p]);
}


// Create an array of numbers 1 to 5 and print each using while.

console.log("\n");
console.log("30. Create an array of numbers 1 to 5 and print each using while.");

const nums = [ 1,2,3,4,5 ];
let n = 0;

while (n < nums.length) {
    console.log(nums[n]);
    n++;
}


// Create an array of 5 marks and calculate the total using a loop.

console.log("\n");
console.log("31. Create an array of 5 marks and calculate the total using a loop.");

const marks = [ 94, 66, 88, 75, 85 ];
let totalMarks = 0;

for (let i=0; i<marks.length; i++) {
    totalMarks += marks[i];
}

console.log(totalMarks);


// Create an array of numbers and print only numbers greater than 10.

console.log("\n");
console.log("32. Create an array of numbers and print only numbers greater than 10.");

const numberss = [4,7,25,54,32,6,10];

for (let i=0; i<numberss.length; i++) {
    if (numberss[i] > 10) {
        console.log(numberss[i])
    }
}


// **** ARRAY METHODS ****
console.log("\n");
console.log("**** ARRAY METHODS ****");

// Use push() to add a new student at the end of an array.

console.log("\n");
console.log("33. Use push() to add a new student at the end of an array.");

const studentss = [ "ali", "rizwan", "sunny" ];
console.log("before", studentss);

studentss.push("harry");
console.log("after", studentss);


// Use unshift() to add a new product at the beginning.

console.log("\n");
console.log("34. Use unshift() to add a new product at the beginning.");

const productss = [ "vivo", "apple", "samsung" ];
console.log("before", productss);

productss.unshift("nokia");
console.log("after", productss);


// Use pop() to remove the last number.

console.log("\n");
console.log("35. Use pop() to remove the last number.");

const numberrs = [ 52, 45, 65, 84, 25 ];
console.log("before", numberrs);

numberrs.pop();
console.log("after", numberrs);


// Use shift() to remove the first color.

console.log("\n");
console.log("36. Use shift() to remove the first color.");

const colorrs = [ "green", "red", "blue", "orange", "red" ];
console.log("before", colorrs);

colorrs.shift();
console.log("after", colorrs);


// Use includes() to check whether a value exists.

console.log("\n");
console.log("37. Use includes() to check whether a value exists.");

console.log("check orange color includes :", colorrs.includes("orange"));
console.log("check green color includes :", colorrs.includes("green"));


// Use indexOf() to find the first position of a value.

console.log("\n");
console.log("38. Use indexOf() to find the first position of a value.");

console.log("check orange index :", colorrs.indexOf("orange"));
console.log("check green index :", colorrs.indexOf("green"));


// Use lastIndexOf() to find the last position of a duplicate value.

console.log("\n");
console.log("39. Use lastIndexOf() to find the last position of a duplicate value.");

console.log("colors :", colorrs);
console.log("check duplicate red color last index :", colorrs.lastIndexOf("red"));


// Use slice() to get the middle 3 elements from an array of 6 names.

console.log("\n");
console.log("40. Use slice() to get the middle 3 elements from an array of 6 names.");

const names = [ "rizwan", "ali", "john", "sara", "sunny", "mike" ];

console.log("names :", names);
const newNames = names.slice(2,5);
console.log("new names :", newNames);


// Use splice() to add a new student at index 2.

console.log("\n");
console.log("41. Use splice() to add a new student at index 2.");

const stuudents = [ "ali", "abhi", "sara", "mike" ];
console.log("students :", stuudents);

stuudents.splice(2, 0, "rizwan");
console.log("new student :", stuudents);


// Use reverse() to reverse an array of 5 numbers.

console.log("\n");
console.log("42. Use reverse() to reverse an array of 5 numbers.");

const numbers1 = [ 1, 2, 3, 4, 5 ];

console.log("numbers", numbers1);
console.log("reverse", numbers1.reverse());


// **** LOOPS + ARRAYS — PROBLEM SOLVING ****
console.log("\n");
console.log("**** LOOPS + ARRAYS — PROBLEM SOLVING ****");

// Create an array of 5 numbers and calculate the total using a for loop.

console.log("\n");
console.log("43. Create an array of 5 numbers and calculate the total using a for loop.");

