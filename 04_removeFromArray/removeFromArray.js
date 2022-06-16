const removeFromArray = function(numArray) {
    //Uses arguments object to access all the numbers to pop
    let args = Array.prototype.slice.call(arguments, 1);
    for (let i=0;i<arguments.length;i++) {
        for (let j=0;j<numArray.length;j++) {
            if (numArray[j] === arguments[i]) {
                numArray.splice(j,1);                  
            } else {
                continue;
            }
        }
    }
    return numArray;
};

// Do not edit below this line
module.exports = removeFromArray;
