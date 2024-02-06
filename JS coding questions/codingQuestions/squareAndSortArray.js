/*
Given an array square it and sort it
*/ 

function square(arr){
    let sqArr = [];
    let initVal = 0;
    for(let i=0; i<arr.length; i++){
        sqArr.push( arr[i]*arr[i]);
    }
    for(let i=0; i<sqArr.length -1; i++){
        for(let j=0; j<sqArr.length - i - 1; j++){
            if(sqArr[j] > sqArr[j+1]){
                const temp = sqArr[j]
                sqArr[j] = sqArr[j+1];
                sqArr[j+1] = temp
            }
        }
    }
    return sqArr
}


const array = [-4,-1,0,3,10]
const result = square(array)
console.log(result)