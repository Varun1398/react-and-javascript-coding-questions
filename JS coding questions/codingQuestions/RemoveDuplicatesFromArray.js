/*
Problem -> Write a function that removes duplicates from an array

input -> ['a','b','a','c','d']
output -> ['a','b','c','d']
*/ 

function removeDuplicate(arr){
    let uniqueArr = []
    for(let i=0; i<arr.length; i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}

//usiing filter method
function removeDuplicateUsingFilter(arr) {
    return arr.filter((el, index) => arr.indexOf(el) === index)
}
//If we want in-place array and not new array
function removeDuplicate(arr){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i+1]){
            arr.splice(i+1,1)
            i--
        }
    }
    return arr
}
console.log(removeDuplicate([0,0,1,1,1,2,2,4]))
const arr = ['a','b','a','c','d']
const res = removeDuplicate(arr);
const res1 = removeDuplicateUsingFilter(arr);
console.log(res)
console.log(res1)
