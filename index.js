const { mdToURI } = require('./src/md-minify.js')
const { parseMarkdownToSteps, 
    parseSimpleSteps,
    parseComplexSteps,
    step_input
} = require('./src/parseSteps.js')

console.log(parseMarkdownToSteps)

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


// add Error case ....
function parseTags(tags) {
    return (tags || '').split(',')
}


module.exports = {
    mdToURI,
    countAge,
    parseTags,
    parseMarkdownToSteps,
    parseSimpleSteps,
    parseComplexSteps,
    step_input
};