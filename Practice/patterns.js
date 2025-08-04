// =====================
// Pattern Printing in JavaScript
// =====================

let n = 5;

// =====================
// 1. Solid Square Pattern
// =====================
// *****
// *****
// *****
// *****
// *****
console.log("1. Solid Square Pattern:");
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        process.stdout.write("* ");
    }
    console.log();
}
console.log("\n");

// =====================
// 2. Right-Angled Triangle (Numbers)
// =====================
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
console.log("2. Right-Angled Triangle (Numbers):");
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j + " ");
    }
    process.stdout.write("\n");
}
console.log("\n");

// =====================
// 3. Inverted Solid Triangle
// =====================
// *****
// ****
// ***
// **
// *
console.log("3. Inverted Solid Triangle:");
for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }
    console.log();
}
console.log("\n");

// =====================
// 4. Right-Aligned Triangle (Pyramid Left Side)
// =====================
//         *
//       * *
//     * * *
//   * * * *
// * * * * *
console.log("4. Right-Aligned Triangle (Pyramid Left Side):");
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write("  ");
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }
    console.log();
}
console.log("\n");

// =====================
// 5. Hollow X Pattern (Cross)
// =====================
// *   *
//  * *
//   *
//  * *
// *   *
console.log("5. Hollow X Pattern (Cross):");
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i === j || i + j === n + 1) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    console.log();
}
console.log("\n");

// =====================
// 6. Extended X Pattern (Double Width)
// =====================
// *       *
//  *     *
//   *   *
//    * *
//     *
//    * *
//   *   *
//  *     *
// *       *
console.log("6. Extended X Pattern (Double Width):");
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= (n * 2) - 1; j++) {
        if (i === j || i + j === 2 * n) {
            process.stdout.write("* ");
        } else {
            process.stdout.write("  ");
        }
    }
    console.log();
}
console.log("\n");

// =====================
// Add more pattern concepts below as needed
// =====================