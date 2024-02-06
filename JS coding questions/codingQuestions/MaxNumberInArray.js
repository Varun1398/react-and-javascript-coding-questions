/*
Problem -> Write a function to find the maximum number in an array.

input = [2.3,6,22,199]
output = 199
*/

//Using reduce
function maxNumberUsingReduce(arr) {
  const maxNumber = arr.reduce((acc, curr) => {
    if (curr > acc) {
      return curr;
    }
  }, 0);
  return maxNumber;
}

const arr = [2.3, 6, 22, 199];
const res = maxNumberUsingReduce(arr);
console.log(res);

//without reduce

function maxWithoutReduce(arr) {
  let maxNum = 0;
  for (let max in arr) {
    if (arr[max] > maxNum) {
      maxNum = arr[max];
    }
  }
  return maxNum;
}

const arr1 = [2.3, 6, 22, 199];
const res1 = maxWithoutReduce(arr1);
console.log(res1);
