/*
Problem -> Given an array, rotate the array to the right by k steps, where k is a non-negative integer.
input -> [1,2,3,4,5,6,7], steps -> 3
output -> [5,6,7,1,2,3,4]

*/

//Using built in methods

function roateUsingInbuilt(arr, k) {
  let size = arr.length;
  if (size > k) {
    k = k % size;
  }

  const rotateArr = arr.splice(size - k, k)
  arr.unshift(...rotateArr)
  return arr
}
console.log(roateUsingInbuilt([1, 2, 3, 4, 5, 6, 7], 3));

//Using without built in methods
function rotateUsingWithoutInbuilt(arr,k){
    let size = arr.length;
    if (size > k) {
      k = k % size;
    }
    reverse(arr, 0, arr.length-1)
    reverse(arr, 0, k-1)
    reverse(arr, k, arr.length-1)
    return arr
}
function reverse(arr, left, right){
    while(left < right){
    const temp = arr[left]
    arr[left ++] = arr[right]
    arr[right--] = temp
    }
}
console.log(">>>",rotateUsingWithoutInbuilt([1, 2, 3, 4, 5, 6, 7], 3));