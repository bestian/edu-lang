
function parseSimpleSteps(markdownText) {
    return parseMarkdownToSteps(markdownText).steps
}

function parseComplexSteps(markdownText) {
    var obj = parseMarkdownToSteps(markdownText).steps
    var intros = parseMarkdownToSteps(markdownText).intros

    console.log(intros)

    obj.title = (intros || []).unshift()
    obj.intros = (intros.filter(x => !x.match(/\.(jpg|png|gif|webp)$/))) || []
    obj.imgs = ((intros.filter(x => x.match(/\.(jpg|png|gif|webp)$/)))[0] || []).filter(x => x.trim())  // 有可能是空陣列
    return obj
}

function parseMarkdownToSteps(markdownText) {
    const lines = markdownText.split('\n');
    const pattern_n = /(.+)/;
    const pattern_D = /^(\d+)\.?.+$/;
    const pattern_href = /\[(.*?)\]\((.*?)\)/g;
    const steps = [];
    const intros = [];
    let foundNumber = false;

    for (const line of lines) {
        const trimmedLine = line.trim();

        // Skip empty lines
        if (!trimmedLine || !pattern_n.test(trimmedLine)) {
            continue;
        }

        // Check if the line starts with a number
        if (pattern_D.test(trimmedLine)) {
            foundNumber = true;
        }

        // If we haven't found a line starting with a number, accumulate the lines as intros
        if (!foundNumber) {
            intros.push(trimmedLine);
            continue;
        }

        const matches = trimmedLine.match(pattern_href);
        if (matches && matches.length > 0) {
            for (const match of matches) {
                const [fullMatch, text, url] = match.match(/\[(.*?)\]\((.*?)\)/);
                let newObject;
                if (url.startsWith('!')) {
                    newObject = {
                        r: url.replace('!', '/'),
                        n: trimmedLine.replace(fullMatch, text),
                    };
                } else if (url.startsWith('http')) {
                    newObject = {
                        h: url,
                        n: trimmedLine.replace(fullMatch, text),
                    };
                }
                steps.push(newObject);
            }
        } else {
            steps.push({
                n: trimmedLine,
            });
        }
    }
    const tags = intros.pop().split('#').map(x => x.replace(' ','')).filter(x => x.trim());
    return { intros: intros, steps: steps, tags: tags };
}

const step_input = `
## 學習料理的步驟
學習料理，其實很簡單

#生活 #廚藝 #抒壓

1. 先在家裡廚房幫忙
2. 可以到[自然美食DIY網站](https://food.bestian.tw)
3. 請看[關於我們](!about)`;



const step_output = {
"intros": [ "## 學習料理的步驟", "學習料理，其實很簡單"],
"tags": ["生活", "廚藝", "抒壓"],
"steps": [
        { "n": "1. 先在家裡廚房幫忙" },
        { "h": "https://food.bestian.tw", "n": "2. 可以到自然美食DIY網站" },
        { "r": "/about", "n": "3. 請看關於我們" }
    ]
}



const setp_input_complex = `
## 學習料理的步驟
學習料理，其實很簡單

#生活 #廚藝 #抒壓

1. 先在家裡廚房幫忙
2. 自然美食DIY網站
3. 關於我們
`
const step_output_complex = {
    "title": "## 學習料理的步驟",
    "intros": ["學習料理，其實很簡單"],
    "imgs": [],
    "tags": ["生活", "廚藝", "抒壓"],
    "steps": [
        { "n": "1. 先在家裡廚房幫忙" },
        { "h": "https://food.bestian.tw", "n": "2. 自然美食DIY網站" },
        { "r": "/about", "n": "3. 關於我們" }
    ]
}

module.exports = { 
    parseMarkdownToSteps, 
    parseSimpleSteps,
    parseComplexSteps,
    step_input, step_output,
    setp_input_complex, step_output_complex
}