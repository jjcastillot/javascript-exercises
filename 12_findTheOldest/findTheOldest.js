const findTheOldest = function(people) {
    const oldest = people.sort(function(a, b) {
        const lastPerson = age(a);
        const nextPerson = age(b);
        return lastPerson > nextPerson ? -1 : 1;
    });
    return oldest[0];
};

function age(obj) {
    if ('yearOfDeath' in obj) {
        return obj['yearOfDeath'] - obj['yearOfBirth'];
    } else {
        return (new Date()).getFullYear() - obj['yearOfBirth'];
    }
}

// Do not edit below this line
module.exports = findTheOldest;
