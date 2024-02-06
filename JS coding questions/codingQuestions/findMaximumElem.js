function maxElem(arr){
    let maxElem = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] > arr[i+1]){
            maxElem = arr[i];
        }
    }
    return maxElem
}

const arr = [2,4,56,7]
const result = maxElem(arr)
console.log(result)