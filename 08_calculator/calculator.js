const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numArray) {
	let suma = 0;
  let len = numArray.length;
  for (let i=0;i<len;i++) {
    suma += numArray[i];
  }
  return suma;
};

const multiply = function(numArray) {
  switch (numArray.length) {
    case 0:
      return 0;
      break;
    case 1:
      return numArray[0];
      break;
    default:
      mult = 1;
      for (let i=0;i<numArray.length;i++) {
        mult *= numArray[i];
      }
      return mult;
      break;
  }
};

const power = function(a,b) {
  return Math.pow(a,b);
};

const factorial = function(num) {
	if ((Math.sign(num)===-1) || (typeof(num)!=='number')) {
    return 'ERROR';
  } else if (num===0) {
    return 1;
  } else {
    return num*factorial(num-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
