/*
PRoblem -> Print fibbonacci using recursion
*/

function fibonacci(n) {
    let fibArr = [0,1]
for (let i = 2; i <= n; i++) {
     fibArr[i] = fibArr[i-1] + fibArr[i-2]
}
return fibArr
}
console.log(fibonacci(5))