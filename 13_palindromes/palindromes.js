const palindromes = function (string) {
  // Convert to lowercase and remove all non-alphanumeric characters
  const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Compare the string with its reverse
  const reversedString = processedString.split('').reverse().join('');
  
  return processedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
