const sumAll = function(start, end) {
  // Check if inputs are positive integers
  if (typeof start !== 'number' || typeof end !== 'number' || 
      start < 0 || end < 0 || 
      !Number.isInteger(start) || !Number.isInteger(end)) {
    return 'ERROR';
  }
  
  // Ensure start is smaller than end
  if (start > end) {
    [start, end] = [end, start];
  }
  
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
