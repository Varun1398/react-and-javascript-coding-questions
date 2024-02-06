function stringWithUniqueElem(s1, s2){
    for(let i=0; i<s1.length; i++){
        for (let j = 0; j < s2.length; j++) {
                if(s1[i] === s2[j]){
                    return false
                }
        }
    }
    return true
}

const str1 = "yo";
const str2 = "yolo";
const res = stringWithUniqueElem(str1, str2)
console.log(res)