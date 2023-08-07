

// add Error case ....
function parseTags(tags) {
    return (tags || '').split(',').filter(x => x.trim());
}

module.exports = { 
    parseTags
}