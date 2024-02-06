/*
Problem -> Write a function to check if two strings are anagrams of each other

input -> 'listen' and 'silent'
outPut -> true
*/ 

//using inbuilt function
function AnagramUsingInBuilt(str1, str2){
    const convertedStr1 = str1.toLowerCase().split("").sort().join("")
    const convertedStr2 = str2.toLowerCase().split("").sort().join("")

    return convertedStr1 === convertedStr2
}

const str1 = 'listen'
const str2 = 'silent'
const res = AnagramUsingInBuilt(str1, str2)
console.log(res)

//without using inbuild function

function AnagramWithoutUsingInBuilt(str1, str2){

    if(str1.length !== str2.length){
        return false
    }
    let counter = {};


    for(let ch of str1){
        counter[ch] = (counter[ch] || 0) + 1
    }
    for(let ch of str2){
        if(!counter[ch]){
            return false
        }
        counter[ch]--
    }
    return true

}

const string1 = 'listen'
const string2 = 'silent'
const result = AnagramWithoutUsingInBuilt(string1, string2)
console.log(result)