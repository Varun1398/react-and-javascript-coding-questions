/*
Problem -> Palindrome number

input -> 121 -> Output -> True
input -> 12 -> Output -> False
*/

function isPalindrome(x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}

console.log(isPalindrome(121));
