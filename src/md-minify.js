function mdToURI(content) {
    // Remove extra whitespace
    let minified = content.replace(/\s+/g, ' ');
    // Remove unnecessary line breaks
    minified = minified
        .replace(/\n /g, '\n')
        .replace(/ \n/g, '\n');
    return encodeURI(minified)
    .replace(/^%20/, '');
}

// console.log(mdToURI)

module.exports = { mdToURI }