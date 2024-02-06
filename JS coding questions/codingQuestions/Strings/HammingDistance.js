/*
Problem -> Find the Hamming distance of 2 strings
input -> Hello, hwllr
outp -> 2
*/ 

function hammingDistance(x,y){

    if(x.length !== y.length){
        return -1
    }

    let distance = 0
    for(let i=0; i<x.length; i++){
        if(x[i] !== y[i]){
            distance++
        }
    }
    return distance
}

console.log(hammingDistance("hello", "hwllr"))