const { mdToURI } = require('./src/md-minify.js')
const { parseMarkdownToSteps, 
    step_input, step_output,
} = require('./src/parseSteps.js')
const { parseTags } = require('./src/parseTags.js')
const { countAge, countAgeDiff } = require('./src/countAge.js')
const { autoId } = require('./src/autoId.js')

module.exports = {
    autoId,
    mdToURI,
    countAge, countAgeDiff,
    parseTags,
    parseMarkdownToSteps,
    step_input, step_output,
};