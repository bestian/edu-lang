#!/usr/bin/env node

const fs = require('fs');

function minifyMd(content) {
    // Remove extra whitespace
    let minified = content.replace(/\s+/g, ' ');
    // Remove unnecessary line breaks
    minified = minified.replace(/\n /g, '\n').replace(/ \n/g, '\n');
    return minified;
}

// Ensure an input file is provided
if (process.argv.length < 3) {
    console.error('Please provide an input Markdown file.');
    process.exit(1);
}

const inputFile = process.argv[2];

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        process.exit(1);
    }

    const minifiedContent = minifyMd(data);
    console.log(minifiedContent);
});
