/*
Problem -> Write a function to calculate the factorial of a given number.

input -> 5
output -> 120
*/ 


function factorial(num){
    let fact = 1;
    for(let i=1; i<=num; i++){
        fact = fact * i;
    }
    return fact
}

const num = 5
const res = factorial(5)
console.log(res)