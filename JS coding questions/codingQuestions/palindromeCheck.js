/*
Promblem -> Determine if a given string is a palindrome (reads the same forwards and backwards).

input -> racecar 
output -> true / false
*/ 

//with Built in function
function palindromeCheck(str){
    const revString = str.toLowerCase().split("").reverse().join("")

    if(str === revString){
        return true
    }else{
        return false
    }
}
const str = "racecar"
const res = palindromeCheck(str);
console.log(res)

//without built in function

function palindrome(str){
    let revStr = ""

    for(let i=0; i<str.length; i++){
        revStr = str[i]+revStr
    }
    if(str === revStr){
        return true
    }else{
        return false
    }
}
const str1 = "varun"
const res1 = palindrome(str1);
console.log(res1)