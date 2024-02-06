/*
Check wheather the word is anagram or not 
*/ 

//Using build in functions

/*
Approach -> firstly we convert the string to lowercase -> split to convert to Array -> sort to get charcther in order -> join to create a string

comapre using === and return true if same else false
*/ 
function anagramUsingBuildInFunctions(s1, s2){
    let convertedS1 = s1.toLowerCase().split("").sort().join("")
    let convertedS2 = s2.toLowerCase().split("").sort().join("")

    if(convertedS1 === convertedS2){
        return true;
    }else{
        return false
    }
}

let str1 = 'listen'
let str2 = 'silent'

const result = anagramUsingBuildInFunctions(str1, str2)
console.log(result)
