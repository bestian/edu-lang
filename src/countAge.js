

// add Error case ....
function countAge(birthday) {
    var birthdayDate = new Date(birthday);
    var todayDate = new Date();

    var age = todayDate.getFullYear() - birthdayDate.getFullYear();

    if (
        todayDate.getMonth() < birthdayDate.getMonth() ||
        (todayDate.getMonth() == birthdayDate.getMonth() &&
        todayDate.getDate() < birthdayDate.getDate())
    ) {
        age--;
    }

    return age;
}

function countAgeDiff(day,birthday) {
    var birthdayDate = new Date(birthday);
    var cDate = new Date(day);

    var age = cDate.getFullYear() - birthdayDate.getFullYear();

    if (
        cDate.getMonth() < birthdayDate.getMonth() ||
        (cDate.getMonth() == birthdayDate.getMonth() &&
        cDate.getDate() < birthdayDate.getDate())
    ) {
        age--;
    }

    return age;
}

module.exports = { 
    countAge, countAgeDiff
}