/*
Problem -> - Write a program that prints the numbers from 1 to 100. But for multiples of three, 
print "Fizz" instead of the number, and for the multiples of five, print "Buzz." For numbers that are multiples of both three and five, print "FizzBuzz."

input -> 1 to 100
output -> 1,2,Fizz,4, Buzz,.....

*/ 

function FizzBuzzFunc(n) {
    for(let i = 1; i<=n; i++){
        if(i%3===0){
            console.log("Fizz")
        }
        else if(i%5===0){
            console.log("Buzz") 
        }else if(i%3 === 0 && i%5===0){
            console.log("FizzBuzz") 
        }else{
            console.log(i)
        }

    }
}

const num = 50
const res = FizzBuzzFunc(num)