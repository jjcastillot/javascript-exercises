const sumAll = function(n1,n2) {
    if (typeof(n1)!=='number' || typeof(n2)!=='number' || Math.sign(n1) ===-1 ||
    Math.sign(n2) ===-1) {
        return 'ERROR';
    } else {
        if ((n2-n1)>=0){
            start=n1;
            finish=n2;
        } else {
            start=n2;
            finish=n1;
        }
        sum =0;
        for (let i=start;i<(finish+1);i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
