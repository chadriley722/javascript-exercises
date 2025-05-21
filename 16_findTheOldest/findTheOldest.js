const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    
    return people.reduce((oldest, current) => {
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        const currentAge = (current.yearOfDeath || currentYear) - current.yearOfBirth;
        
        return currentAge > oldestAge ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
