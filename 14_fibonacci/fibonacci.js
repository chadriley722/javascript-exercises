const fibonacci = function(n) {
  // Convert string input to number if needed
  n = parseInt(n);
  
  // Handle negative numbers
  if (n < 0) return "OOPS";
  
  // Handle base cases
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  
  // Calculate Fibonacci number iteratively
  let prev = 1;
  let curr = 1;
  let result;
  
  for (let i = 3; i <= n; i++) {
    result = prev + curr;
    prev = curr;
    curr = result;
  }
  
  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
