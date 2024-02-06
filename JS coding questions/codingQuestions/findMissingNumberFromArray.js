/*
Problem -> Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

input -> [3,4,1,0,5]
output -> 2
*/ 

function findMissing(arr){
    let n =arr.length+1
    let totalSum = (n*(n-1))/2
    let actualSum = 0
    for(let num of arr){
        actualSum = actualSum + num
    }
    return totalSum - actualSum
}

const array = [3, 0, 1, 4, 5,2,7]
const res = findMissing(array)
console.log(res)