/*
Problem -> Write a function that merges two sorted arrays into a single sorted array.

input -> arr1 = [4,3,54,65,12]
        arr2 = [1,23,2]
output -> []
*/ 

function mergeTwoArr(arr1, arr2) {
    let mergedArr = []
    for(let num in arr1){
        mergedArr[num] = arr1[num]
    }
    for(let num in arr2){
        mergedArr[num] = arr2[num]
    }
    return mergedArr
}

const arr1 = [4,3,54,65,12]
const arr2 = [1,23,2]

const res = mergeTwoArr(arr1, arr2)
console.log(res)