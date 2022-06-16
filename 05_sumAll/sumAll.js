const sumAll = function(n1,n2) {
    // Determine if inputs are not numbers or are negative numbers.
    if (typeof(n1)!=='number' || typeof(n2)!=='number' || Math.sign(n1) ===-1 ||
    Math.sign(n2) ===-1) {
        return 'ERROR';
    } else {
        // Assigns start to the lower number & finish to the higher one
        if ((n2-n1)>=0){
            start=n1;
            finish=n2;
        } else {
            start=n2;
            finish=n1;
        }
        // Initializes sum and add values from start to finish
        sum =0;
        for (let i=start;i<(finish+1);i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
