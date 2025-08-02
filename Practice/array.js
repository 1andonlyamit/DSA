const prompt = require("prompt-sync")()

// let arr = [10, 12, 14, 15]
// console.log(arr);
// arr.push(100)
// console.log(arr);
// arr.unshift(101)
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.shift()
// console.log(arr);
// console.log(arr.length);
// console.log(arr[2]);

// arr[5] = 1500;
// console.log(arr);
// arr[4] = 1400;
// console.log(arr);
// arr[2] = 1200;
// console.log(arr);


// let arr2 = new Array(5);
// console.log(arr2);
// arr2.push(100)
// console.log(arr2);
// console.log(arr2[0]);

// let size = prompt("Enter size of the arrray: ")
// let arr3 = new Array(size), sum = 0;
// for (let i = 0; i < size; i++) {
//     arr3[i] = Number(prompt("Enter Value " + i + ":"))
//     sum += arr3[i]
// }
// console.log(arr3);
// console.log(sum);

//max-element in array
let arr3 = [10, 40, 50, 60, 6000, 50000, 25, 33, 54, 1, 15]
let max = arr3[0]

for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] > max) {
        max = arr3[i]
    }
}

console.log(max);


