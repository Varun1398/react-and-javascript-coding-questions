function countVowelsWithBuiltInFunction(str){

    let vowelsCounter = 0;

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    //convert given string to array to apply filter method
    let converteStr = str.toLowerCase().split("")
    converteStr.filter((string) => vowels.includes(string) && vowelsCounter++)
    return vowelsCounter
}

const string = "hello world"
const result =  countVowelsWithBuiltInFunction(string)
console.log(result)