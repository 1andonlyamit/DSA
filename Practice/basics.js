const prompt = require("prompt-sync")();

// =====================
// 1. String and Number Operations
// =====================
// Demonstrates how JavaScript handles operations between strings and numbers
console.log("1. String and Number Operations:");
let a1 = "amit" + 1; // Concatenation
let b1 = "amit" * 2; // NaN
let c1 = 2 * "amit"; // NaN
let d1 = 2 + "amit"; // Concatenation
let f1 = 2 * "amit"; // NaN
console.log('let a = "amit" + 1:', a1);
console.log('let b = "amit" * 2:', b1);
console.log('let c = 2 * "amit":', c1);
console.log('let d = 2 + "amit":', d1);
console.log('let f = 2 * "amit":', f1);
console.log("\n");

// =====================
// 2. Prompt Input Example
// =====================
console.log("2. Prompt Input Example:");
let a2 = prompt("Enter your name: ");
console.log("You entered:", a2);
console.log("\n");

// =====================
// 3. Swapping Two Numbers
// =====================
console.log("3. Swapping Two Numbers:");
let a3 = 10, b3 = 5;
console.log("Before swap:", a3, b3);
// Using arithmetic
a3 = a3 + b3;
b3 = a3 - b3;
a3 = a3 - b3;
console.log("After swap using arithmetic:", a3, b3);
// Using array destructuring
[a3, b3] = [b3, a3];
console.log("After swap using destructuring:", a3, b3);
console.log("\n");

// =====================
// 4. Increment/Decrement Operator Examples
// =====================
console.log("4. Increment/Decrement Operator Examples:");
let i4 = 11;
i4 = i4++ + ++i4;
console.log("Result of i = i++ + ++i when i starts at 11:", i4);

let a4 = 11, b4 = 22, c4;
c4 = a4 + b4 + a4++ + b4++ + ++a4 + ++b4;
console.log("a after operations:", a4);
console.log("b after operations:", b4);
console.log("c after operations:", c4);
console.log("\n");

// =====================
// 5. Boolean and Math Operations
// =====================
console.log("5. Boolean and Math Operations:");
let b5 = true;
b5++;
console.log("true incremented by 1:", b5);
console.log("\n");

// =====================
// 6. Math Object Methods
// =====================
console.log("6. Math Object Methods:");
console.log("Math.ceil(10.7):", Math.ceil(10.7));
console.log("Math.floor(10.7):", Math.floor(10.7));
console.log("Math.round(10.7):", Math.round(10.7));
console.log("Math.pow(10, 3):", Math.pow(10, 3));
console.log("Math.abs(-10.7):", Math.abs(-10.7));
console.log("Math.trunc(10.74544444444444444):", Math.trunc(10.74544444444444444));
console.log("Math.sqrt(10):", Math.sqrt(10));
console.log("Math.cbrt(10):", Math.cbrt(10));
console.log("Math.min(10.7, 4, 555, 34):", Math.min(10.7, 4, 555, 34));
console.log("Math.max(10.7, 4, 555, 34):", Math.max(10.7, 4, 555, 34));
console.log("Math.random():", Math.random());
let a6 = 24.44564668;
console.log("a.toFixed():", a6.toFixed());
console.log("\n");

// =====================
// 7. Functions: Circle Properties
// =====================
console.log("7. Functions: Circle Properties (Area and Circumference):");
function calculateCircleProperties(r) {
    let area = Math.PI * r * r;
    let c = 2 * r * Math.PI;
    return [c, area];
}
const [circumference, area] = calculateCircleProperties(5);
console.log("For radius 5: Circumference =", circumference, ", Area =", area);
console.log("\n");

// =====================
// 8. Conditional Statements: Leap Year Check
// =====================
console.log("8. Conditional Statements: Leap Year Check:");
let ly = Number(prompt("Enter a year to check if it's a leap year: "));
let isLeap = false;
if (ly % 4 == 0) {
    if (ly % 100 == 0) {
        if (ly % 400 == 0) {
            isLeap = true;
        } else {
            isLeap = false;
        }
    } else {
        isLeap = true;
    }
} else {
    isLeap = false;
}
console.log(isLeap ? "Yes, it's a Leap year." : "Not a Leap year.");
console.log("\n");

// =====================
// 9. Functions: Find Greatest of Three Numbers
// =====================
console.log("9. Functions: Find Greatest of Three Numbers:");
function findGreatest(a, b, c) {
    return (a > b) ? (a > c ? a : c) : (b > c ? b : c);
}
console.log("Greatest among 10, 20, 15 is:", findGreatest(10, 20, 15));
console.log("\n");

// =====================
// 10. Loops: Factorial Calculation
// =====================
console.log("10. Loops: Factorial Calculation:");
let num10 = 5;
let factorial10 = 1;
for (let i = 1; i <= num10; i++) {
    factorial10 *= i;
}
console.log("Factorial of 5 is:", factorial10);
console.log("\n");

// =====================
// 11. Loops: Print N to 1
// =====================
console.log("11. Loops: Print N to 1:");
function printNto1(n) {
    let number = "";
    for (let i = n; i >= 1; i--) {
        number += i + " ";
    }
    console.log("Numbers from", n, "to 1:", number.trim());
}
printNto1(5);
console.log("\n");

// =====================
// 12. Switch Statement Example
// =====================
console.log("12. Switch Statement Example:");
let n12 = 1;
switch (n12) {
    case 1:
    case 2: console.log("hii"); break;
    case 3:
    case 4: console.log("bye"); break;
    default: console.log("lele");
}
console.log("\n");

// =====================
// 13. Functions: Factorial and Strong Number Check
// =====================
console.log("13. Functions: Factorial and Strong Number Check:");
function fact(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
function isStrongNumber(n) {
    let number = n, sum = 0;
    while (n > 0) {
        let rem = n % 10;
        sum += fact(rem);
        n = Math.floor(n / 10);
    }
    return sum == number ? "Yes" : "No";
}
console.log("Is 145 a Strong Number?", isStrongNumber(145));
console.log("\n");

// =====================
// 14. Functions: Automorphic Number Check
// =====================
console.log("14. Functions: Automorphic Number Check:");
function isAutomorphic(n) {
    let square = n * n;
    let digits = 0, temp = n;
    while (temp > 0) {
        digits++;
        temp = Math.floor(temp / 10);
    }
    let lastDigits = square % Math.pow(10, digits);
    return lastDigits === n ? "Yes" : "No";
}
console.log("Is 15 an Automorphic Number?", isAutomorphic(15));
console.log("\n");

// =====================
// 15. Guess the Number Game
// =====================
console.log("15. Guess the Number Game:");
let com = Math.floor(Math.random() * 100) + 1;
let UserInput;
do {
    UserInput = prompt("Enter any number between 1 and 100: ");
    UserInput = Number(UserInput);
    if (isNaN(UserInput) || UserInput > 100 || UserInput < 1) {
        console.log("Invalid Input. Please enter a number between 1 and 100.");
        continue;
    }
    if (UserInput > com) {
        console.log("Too High");
    } else if (UserInput < com) {
        console.log("Too Low");
    } else {
        console.log("Yay! You won. The number is " + com);
    }
} while (com !== UserInput);
console.log("\n");

// =====================
// Add more basic concepts below as needed
// =====================