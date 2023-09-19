// Parse markdown text to steps object;
function parseMarkdownToSteps(markdownText) {
    const lines = markdownText.split('\n');
    const pattern_n = /(.+)/;
    const pattern_D = /^(\d+)\.?.+$/;
    const pattern_href = /\[(.*?)\]\((.*?)\)/g;
    const pattern_tags = /#(.+)/;
    const steps = [];
    const tips = [];
    const intros = [];
    const tags = [];
    let foundNumber = false;
    let pushToTips = false;

    for (const line of lines) {
        const trimmedLine = line.trim();
        const pattern_t = /^tips+/;

        // Skip empty lines;
        if (!trimmedLine) {
            continue;
        }

        // Check if the line starts with a number;
        if (pattern_D.test(trimmedLine)) {
            foundNumber = true;
        }

        // Check for tips keyword
        if (pattern_t.test(trimmedLine)) {
            pushToTips = true;
            continue;  // Skip the 'tips' line itself
        }

        // Check for tags
        const matcheTags = trimmedLine.match(pattern_tags);
        if (matcheTags) {
            // Split by spaces, remove the '#' and filter out any empty strings
            tags.push(...trimmedLine.split(' ').map(tag => tag.replace('#', '')).filter(Boolean));
            continue;  // Skip lines containing only tags
        }

        const matches = trimmedLine.match(pattern_href);
        let newObject = {};

        if (matches) {
            for (const match of matches) {
                const [fullMatch, text, url] = match.match(/\[(.*?)\]\((.*?)\)/);
                if (url.startsWith('!')) {
                    newObject = { r: url.replace('!', '/'), n: trimmedLine.replace(fullMatch, text) };
                } else {
                    newObject = { h: url, n: trimmedLine.replace(fullMatch, text) };
                }
            }
        } else {
            newObject = { n: trimmedLine };
        }

        if (!foundNumber && !pushToTips) {
            intros.push(newObject.n);
        } else if (pushToTips) {
            tips.push(newObject);
        } else {
            steps.push(newObject);
        }
    }

    return {
        intros: intros,
        steps: steps,
        tags: tags,
        tips: tips
    };
}

const step_input = `
    歡迎參與教育元語言專案的共創：
    有興趣者請進行以下協同步驟：

    #參與 #協作 #開源

    1. 進入[教育元語言專案](https://github.com/bestian/edu-lang/)。
    2. 點選Star
    3. 點選Watch
    4. 請看[Wiki](https://github.com/bestian/edu-lang/wiki)
`;


const step_output = {
    intros: [ '歡迎參與教育元語言專案的共創：', '有興趣者請進行以下協同步驟：' ],
    steps: [
      { h: 'https://github.com/bestian/edu-lang/', n: '1. 進入教育元語言專案。' },
      { n: '2. 點選Star' },
      { n: '3. 點選Watch' },
      { h: 'https://github.com/bestian/edu-lang/wiki', n: '4. 請看Wiki' }
    ],
    tags: [ '參與', '協作', '開源' ],
    tips: []
  }

module.exports = { 
    parseMarkdownToSteps, 
    step_input, step_output,
}