// let a = "amit" + 1
// let b = "amit" * 2
// let c = 2 * "amit"
// let d = 2 + "amit"
// let f = 2 * "amit"

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(f)

// let a = prompt("Hii")
// console.log(a);

//swap two numbers
// a = 10;
// b = 5
// console.log("before swap: " + a, b);
// a = a + b
// b = a - b
// a = a - b
// [a, b] = [b, a]
// console.log("After swap: " + a, b);

// let i =11
// i=i++ + ++i

// console.log(i);

// let a = 11, b = 22, c;
// c = a + b + a++ + b++ + ++a + ++b;
// console.log("a=" + a);
// console.log("b=" + b);
// console.log("c=" + c)

// let i = 0; 
// i = i++ - --i + ++i - i--; 
// console.log(i)

// let b = true; 
// b++;   
// console.log(b)

// let i = 1, j = 2, k = 3; 
// let m = i-- - j-- - k--; 
// console.log("i=" + i); 
// console.log("j=" + j); 
// console.log("k=" + k); 
// console.log("m=" + m)

// let a = 1, b = 2; 
// console.log(--b - ++a + ++b - --a);

// let i = 19, j = 29, k; 
// k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++; 
// console.log("i=" + i); 
// console.log("j=" + j); 
// console.log("k=" + k)

// let i = 11;
// let j = --(i++)
// console.log(j);

// let m = 0, n = 0; 
// let p = --m * --n * n-- * m--; 
// console.log(p)

// let a = 1; 
// a = a++ + ++a * --a - a--; 
// console.log(a)

// let a = 11++;
// console.log(a)

// let i = 0, j = 0; 
// console.log(--i * i++ * ++j * j++)

// console.log(Math.ceil(10.7));
// console.log(Math.floor(10.7));
// console.log(Math.round(10.7));
// console.log(Math.pow(10, 3));
// console.log(Math.abs(-10.7));
// console.log(Math.trunc(10.74544444444444444));
// console.log(Math.sqrt(10));
// console.log(Math.cbrt(10));
// console.log(Math.min(10.7, 4, 555, 34));
// console.log(Math.max(10.7, 4, 555, 34));
// console.log(Math.random());
// let a = 24.44564668
// console.log(a.toFixed());

// function calculateCircleProperties(r) {
//     // Write your logic here
//     area=Math.PI * r * r
//     c=2 *r* Math.PI
//     return c, area;
// }
// const [c, a]=calculateCircleProperties(5)
// console.log(c, a);


//CONDITIONAL STATEMENTS
// let ly = Number(prompt("Enter a number"));
// let isLeap = false;

// if (ly % 4 == 0) {
//     if (ly % 100 == 0 && ly % 400 == 0) {
//         isLeap = true
//     } else {
//         isLeap = false
//     }
// } else { isLeap = false }

// console.log(isLeap ? "Yes a Leap year" : "Not a Leap year");


// function findGreatest(a, b, c) {
//     // Write your logic here
//     return (a>b) ? (a>c ? a : c) : (b>c ? b : c)
// }



// LOOPS
// let num = 5
// let factorial = 1;
// for (i = 1; i <= num; i++) {
//     factorial *= i;
// }
// console.log(factorial)


// function printNto1(n) {
//     let number="";
//     for (i = n; i <= 1; i--) {
//         number += i+" ";
//     }   
//     console.log(number.trim())
// }

// printNto1(5)
// let num;
// for (i = 1; i > 5; i++) {
//     }   
//     console.log(num)

// let n = 1;
// switch(n){
//     case 1: 
//     case 2: console.log("hii"); break;  
//     case 3: 
//     case 4: console.log("bye"); break;
//     default: console.log("lele");         
// }

// function fact(n){
//   let factorial = 1;
// for (i = 1; i <= n; i++) {
//     factorial *= i;}
//     console.log(factorial);    
//     return factorial;
// }
// function isStrongNumber(n) {
//     // Write your logic here
//     let number=n
//     let sum=0
//     while(n>0){
//         rem=n%10
//         console.log(rem);
//         sum += fact(rem)
//         console.log(sum);
//         n=Math.floor(n/10)
//     }

//     console.log("sum: " + sum);
//     console.log("n: " + n);

//     return sum==n ? "Yes" : "No"
// }

// console.log(isStrongNumber(145))


// function isAutomorphic(n) {
//     let square=n*n
//     let digits=0, temp=n;

//     while(temp>0){
//         digits++;
//         temp=Math.floor(temp / 10);
//     }
//     let lastDigits=square % Math.pow(10, digits);
//     console.log(lastDigits);

//     return lastDigits === n ? "Yes" : "No";
// }

// console.log(isAutomorphic(15));

let com = Math.floor(Math.random() * 100) + 1
let UserInput;
do {
    UserInput = prompt("Enter Any Number")
    if (isNaN(UserInput) || UserInput > 100 || UserInput < 0) {
        console.log("Invalid Input");
        continue;
    }
    if (UserInput > com) { console.log("Too High"); }
    else if (UserInput < com) { console.log("Too Low"); }
    else console.log("Yay You won the number is " + com);

} while (com !== UserInput)
