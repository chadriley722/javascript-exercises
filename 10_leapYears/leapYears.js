const leapYears = function(year) {
  // Check if year is divisible by 4
  if (year % 4 === 0) {
    // If divisible by 100, it's not a leap year UNLESS it's also divisible by 400
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    // If divisible by 4 but not by 100, it's a leap year
    return true;
  }
  // If not divisible by 4, it's not a leap year
  return false;
};

// Do not edit below this line
module.exports = leapYears;
