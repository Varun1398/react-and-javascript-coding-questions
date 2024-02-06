/*
Problem -> Add '*' between the same element given in the string if adjancent is same

input -> hello
ouput -> hel*lo
*/ 

function addAstrik(str){
    if(str.length < 1){
        return false
    }
    let result = str[0]
    for (let i = 1; i < str.length; i++) {
        if(str[i] === str[i-1]){
            result += '*' + str[i]
        }else{
            result += str[i]
        }
    }
    return result
}

console.log(addAstrik("aaaaabbbbc"))