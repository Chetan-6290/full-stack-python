"use strict"
// prime number print 1-100
// for (let i=1; i<100; i++){
//     let n = i
//     let isprime =true
//     for(let i=2; i<n; i++){
//         if(n % i == 0){
//             isprime = false;
//             break;
//         } 
//     }
//     if(isprime){
//             // console.log("prime number");
//             console.log(n);    
//         }
// }

// //factorial number 
//   for(let i=1; i<=100; i++){
//     let n =i
//     let ans = 1
//   for(let i=1; i<=n; i++){
//     ans = ans * i;
//   }
//   console.log(ans);

//   }


//swap number 
let a=5;
let b = 10;

// let temp = a;
// a=b;
// b =temp;

// a  = a +b; // 15
// b = a-b // 5
// a= a-b // 10

// [a,b] = [b,a]

a = a ^ b
b = a ^ b
a = a ^ b



console.log("A ",a, " 10");
console.log("B ",b, " 5");


//fabonicisis series program
// let a = 0;
// let b = 1;
// let n =10;

// for(let i=1; i<=n; i++){
//     console.log(`${a}+${b}=${a+b}`)
//     let temp =a ;
//     a=b;
//     b=temp + b
// }