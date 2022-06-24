const ftoc = function(temp) {
  if (typeof(temp)!=='number') {
    return 'ERROR';
  } else {
      return Math.round(10*(temp-32)*5/9)/10; // Tricks the round function
  }    
};

const ctof = function(temp) {
  if (typeof(temp)!=='number') {
    return 'ERROR';
  } else {
      return Math.round((temp*9/5+32)*10)/10; // Tricks the round function
  } 
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
