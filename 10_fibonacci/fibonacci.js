const fibonacci = function(numS) {
    let num = parseInt(numS);
    if ((Math.sign(num)===-1) || (typeof(num)!=='number') || num===0) {
        return 'OOPS';
      } else if (num===1 || num===2) {
        return 1;
      } else {
        return fibonacci(num-1) + fibonacci(num-2);
      }
};

// Do not edit below this line
module.exports = fibonacci;
