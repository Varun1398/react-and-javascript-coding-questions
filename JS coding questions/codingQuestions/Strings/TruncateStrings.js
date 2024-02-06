/*
Problem -> Given a string if the string length is more than the specified limit truncate it and replace the rest of the string with '...' 

input -> "Subscribe to XYZ", Length -> 9
output -> "Subscribe..."

*/ 

function truncateString(str, maxLength){
    if(str.length > maxLength){
        return str.slice(0,maxLength) + "...";
    }else{
        return str
    }
}

console.log(truncateString("Subscribe to XYZ",9))