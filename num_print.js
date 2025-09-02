"use strict"

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//reverse number 
// for (let i=10; i >= 1; i--) {
//   console.log(i);
// }

//even odd
// for(let i=1; i<=10; i++){   
//     if(i%2===0){
//         console.log(i + " is even");
//     }else{
//         console.log(i + " is odd");
//     }
// }


// even number print 
// for(let i=1; i<=10; i++){
//     if(i%2===0){
//         console.log(i + " is even");
//     }
// }

//print table of number
// let n = +prompt("enter number");
// for(let i=1; i<=10; i++){
//     console.log( i * n);

// }

// prime number 
let n = 5
    let isprime =true
    for(let i=2; i<n; i++){
        if(n % i == 0){
            isprime = flase;
            break;
        }
        if(isprime){
            log("prime number");
        }else{
            log("not prime");
        }
    }