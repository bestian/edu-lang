#!/usr/bin/env node

const fs = require('fs');

function parseMarkdownToStructure(markdownText) {
    const lines = markdownText.split('\n');
    const pattern = /\[(.*?)\]\((.*?)\)/;
    const steps = [];
    const intros = [];
    const tags = [];
    let foundNumber = false;

    for (const line of lines) {
        const trimmedLine = line.trim();

        // Skip empty lines
        if (!trimmedLine) {
            continue;
        }

        // Check for lines that start with exactly one '#'
        if (trimmedLine.startsWith('#') && !trimmedLine.startsWith('##')) {
            const tagList = trimmedLine.split(' ').filter(tag => tag.startsWith('#'));
            tags.push(...tagList.map(tag => tag.replace('#', '')));
            continue;
        }

        // Check if the line starts with a number
        if (/^\d/.test(trimmedLine)) {
            foundNumber = true;
        }

        // If we haven't found a line starting with a number, accumulate the lines as intros
        if (!foundNumber) {
            intros.push(trimmedLine);
            continue;
        }

        const matches = trimmedLine.match(pattern);
        if (matches && matches.length >= 3) {
            const link = matches[2].startsWith('!') ? matches[2].substring(1) : matches[2];
            if (matches[2].startsWith('!')) {
                steps.push({
                    'r': link,
                    'n': matches[1]
                });
            } else {
                steps.push({
                    'h': link,
                    'n': matches[1]
                });
            }
        } else {
            steps.push({
                'n': trimmedLine
            });
        }
    }

    return {
        'intros': intros,
        'tags': tags,
        'steps': steps
    };
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

    const minifiedContent = parseMarkdownToStructure(data);
    console.log(minifiedContent);
});
