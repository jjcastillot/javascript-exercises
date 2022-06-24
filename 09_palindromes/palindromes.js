const palindromes = function (myString) {
    // Removes punctuation and spaces from string
    noPunctString = myString.replace(/[.,\/\ #!$%\^&\*;:{}=\-_`~()]/g,"");
    fString = noPunctString.toLowerCase();
    len = fString.length;
    half_len = Math.floor(fString.length/2);
    for (let i=0;i<half_len;i++) {
        if (fString[i]!==fString[len-1-i]) {
        return false;
        break;
        } else {
            continue;
        }
    }
    return true; 
};

// Do not edit below this line
module.exports = palindromes;
