const reverseString = function(string) {
    let revString = '';
    let len = string.length;
    for (i=0;i<len;i++){
        revString += string[len-1-i]; //NEED TO CONCATENATE EACH CHAR
    }
    // OPTION 2. Just with built-in functions
    //return string.split("").reverse().join("");
    return revString;
};


// Do not edit below this line
module.exports = reverseString;
