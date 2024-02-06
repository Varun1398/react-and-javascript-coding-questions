/*
Problem -> Find the 2nd largest number in an array

input -> [10,5,10]
output -> 5
input -> [1,2,4,5,45,65,32]
output -> 45

Approach 1 -> use inbuild method -> find unique elems -> sort in desending and return 2nd elme

Approach 2 -> use for loop 
*/

//Approach 1 -> Using inbuilt methods

function findSecondLargestElemEasy(arr){
    const uniqueArr = Array.from(new Set(arr))

    uniqueArr.sort((a,b) => b-a)
    return uniqueArr[1]
}

const result = findSecondLargestElemEasy([1,2,4,5,45,65,32])
console.log(result)

//Approach 2 using for loop
/*
Dry run arr = [1,2,4,5,45,65,32]
arr[0] => 1
1 > -1
secLarges = -1
larg = 1

arr[2] => 2
2 > 1
secLarges = 1
larges = 2

arr[3] => 4
4 > 2
secLarge = 2
larg = 4

arr[4] -> 5
5 > 4
secLarge = 4
large = 5

arr[5] -> 45
45 > 5
secLar => 5
large => 45

arr[6] => 65
65 > 45
sec large => 45
lare = 65

arr[7] => 32

32<65 
exit if nd got to else if

32 !== 65 => true
32 < 45 -> exit condition
return second largest

*/ 
function secondLargestUsingFor(arr){
    let largest = -1;
    let secondLargest = -1;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        }else if(arr[i] !== largest && arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}
console.log(secondLargestUsingFor([1,2,4,5,45,65,66]))