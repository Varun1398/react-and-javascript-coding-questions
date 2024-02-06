function countVowelsWithoutBuiltInFunctions(str){
    let vowelsCounter = 0;

    let vowels = ['a','e','i','o','u'];

    for(i of str){
        if(vowels.includes(i)){
            vowelsCounter++;
        }
    }
    return vowelsCounter

}


const string = "hello"
const result = countVowelsWithoutBuiltInFunctions(string);
console.log(result)