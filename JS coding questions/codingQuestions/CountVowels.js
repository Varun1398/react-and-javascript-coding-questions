/*
Problem ->  Write a function that counts the number of vowels in a given string.

input => "varun"
output -> 2
*/ 

function countVowels(str) {
    let vowelArr = ['a','e','i','o','u']
    let count = 0;

    for(let vowel in str){
        if(vowelArr.includes(str[vowel])){
            count ++
        }
    }
    return count
}

const str = 'vaarun'
const res = countVowels(str)
console.log(res)