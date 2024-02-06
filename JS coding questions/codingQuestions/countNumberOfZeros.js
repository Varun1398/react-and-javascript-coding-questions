function countZeros(n){
    let zeroCount = 0
    for(let i =1; i<=n;i++){
        let numStr = i.toString();
        zeroCount += numStr.split('0').length - 1;
    }
    return zeroCount
}

const number = 150
const result = countZeros(number);
console.log(result)