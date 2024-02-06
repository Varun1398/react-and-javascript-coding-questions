/*
Question ->  Write a function that reverses a given string.

Input -> abcd
output -> dcba

approach -> 
*/


// Without built in function
function reverseString(str){
    let revStr = "";
    for(let i=0; i<str.length; i++){
        revStr = str[i]+revStr
    }
    return revStr
}

const str = "abcd"
const result = reverseString(str)
console.log(result)

//With built in function

function revString(str){
    return str.split("").reverse().join("")
}
const strWith = "hello"
const resultWith = revString(strWith)
console.log(resultWith)