/*
Problem -> given an array square and sort without using internal methods

input -> [-4,-1,0,3,10]
ouput -> [0,1,9,16,100]
*/

function squareAndSort(arr){
    let squaredArr = []
    let inital = 0
    let sortedArr = []
    for (let i = 0; i < arr.length; i++) {
        squaredArr.push(arr[i]*arr[i])
    }
    //[ 16, 1, 0, 9, 100 ]
    // now we need to sort the squared array in ascending order
    for(let i=0; i<squaredArr.length -1; i++){
        for(let j=0; j<squaredArr.length - i - 1; j++){
            if(squaredArr[j] > squaredArr[j+1]){
                const temp = squaredArr[j]
                squaredArr[j] = squaredArr[j+1];
                squaredArr[j+1] = temp
            }
        }
    }
    return squaredArr
    
}

console.log(squareAndSort([-4,-1,0,3,10]))