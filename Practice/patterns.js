// for(i=0; i<=5; i++){
//     for(j=1; j<=5; j++){
//         process.stdout.write("*")
//     }
//     console.log();  
// }

//     for(i=1; i<=n; i++){
//     for(j=1; j<=i; j++){

//         process.stdout.write(j+" ")
//     }
//         process.stdout.write("\n")
// }

// for(i=0; i<=5; i++){
//     for(j=i; j<=5; j++){
//         process.stdout.write("*")
//     }
//     console.log();  
// }

// for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (j <= n - i) {
//                 process.stdout.write("  "); 
//             } else {
//                 process.stdout.write("* ");
//             }
//         }
//         process.stdout.write("\n");
//     }


let n = 5;

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         if (j <= n - i) {
//             process.stdout.write(" ");
//         } else if (j >= n + i) {
//             process.stdout.write(" ");
//         }else{
//         process.stdout.write("* ");}
//     }
//     process.stdout.write("\n");
// }

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//         if(i==j || i+j == n+1){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
    
// }

for(let i=1; i<=n; i++){
    for(let j=1; j<=(n*2)-1; j++){
        if(i==j || i+j === 2 * n){
            process.stdout.write("* ")
        }else{
            process.stdout.write(" ")
        }
    }
    console.log();
    
}