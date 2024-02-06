/*
Problem -> factorial using recursion
*/

function factUsingRecursion(n){
    if(n === 0 || n === 1){
        return 1
    }else{
        return n * factUsingRecursion(n-1)
    }
}

console.log(factUsingRecursion(5))