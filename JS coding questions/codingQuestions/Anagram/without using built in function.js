/*
Anagram withour using built in functions

Approach -> In this we run 2 for loop, create a counter object and while iterating using for loop for both string
we will inc the counter value for each charCode using charCodeAt() method and check in s2 for loop 
if the value is undefined or 0 previosly than return false other wise decrement and return true
*/

function anagramWithoutUsingBuiltInFunction(s1, s2) {
  if (s1 === s2) {
    return true;  //default case if both string are same
  }

  if (s1.length !== s2.length) {
    return false; // if length is different directly false
  }

  let counter = {};  // Counter object to keep track of occurences of the characters


  //This loop will iterate of the string 1 and increase the count for each charcter present to 1
  for (let i = 0; i < s1.length; i++) {
    let charCount = s1.charCodeAt(i); //charCodeAt method will return the UTF-16 value for the charcter it takes an param with index
    counter[charCount] = (counter[charCount] || 0) + 1; //This will increase the count in counter for each char code in above conter object
  }

  /*This loop will iterate over the string 2 and checks if the char code is not there in the counter object or 0 than it will return false
  else it will decrement the value and if loop reaches this point string is anagram and return true
  */
  for (let j = 0; j < s2.length; j++) {
    let charCountj = s2.charCodeAt(j);

    if (!counter[charCountj]) {
      return false;
    } else {
      counter[charCountj]--;
    }
  }
  return true;
}

let str1 = "abcd";
let str2 = "abcd";

const result = anagramWithoutUsingBuiltInFunction(str1, str2);
console.log(result);
