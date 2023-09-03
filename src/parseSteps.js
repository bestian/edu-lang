
function parseSimpleSteps(markdownText) {
    return parseMarkdownToSteps(markdownText).steps;
}

function parseComplexSteps(markdownText) {
    var obj = parseMarkdownToSteps(markdownText).steps;
    var intros = parseMarkdownToSteps(markdownText).intros;

    console.log(intros);

    obj.title = (intros || []).unshift();
    obj.intros = (intros.filter(x => !x.match(/\.(jpg|png|gif|webp)$/))) || [];
    obj.imgs = ((intros.filter(x => x.match(/\.(jpg|png|gif|webp)$/)))[0] || []).filter(x => x.trim())  // 有可能是空陣列;
    return obj;
}

function parseMarkdownToSteps(markdownText) {
    const lines = markdownText.split('\n');
    const pattern_n = /(.+)/;
    const pattern_D = /^(\d+)\.?.+$/;
    const pattern_href = /\[(.*?)\]\((.*?)\)/g;
    const steps = [];
    const tips = [];
    const intros = [];
    const tags = [];
    let foundNumber = false;
    var pushToTips = false;

    for (const line of lines) {
        const trimmedLine = line.trim();
        const pattern_t = /^tips+/;
        const pattern_tags = /#(.+)/;
        const isTips = pattern_t.test(trimmedLine);

        // Skip empty lines;
        if (!trimmedLine || !(pattern_n.test(trimmedLine))) {
            continue;
        } else {
            pushToTips = true;
        }

        // Check if the line starts with a number;
        if (pattern_D.test(trimmedLine)) {
            foundNumber = true;
        }

        // If we haven't found a line starting with a number, accumulate the lines as intros;
        if (!foundNumber && !pushToTips) {
            intros.push(trimmedLine);
            continue;
        }

        //check if it is line of tags
        const matcheTags = trimmedLine.match(pattern_tags);
        const matches = trimmedLine.match(pattern_href);
        var newObject = {}
        if (matcheTags && matcheTags.length > 0) {
            for (const match of matcheTags) {
                const tag = match.split(/\s+/g, '');
                tags.push(tag);
            }
        } else if (matches && matches.length > 0) {
            for (const match of matches) {
                const [fullMatch, text, url] = match.match(/\[(.*?)\]\((.*?)\)/);
                if (url.startsWith('!')) {
                    newObject = {
                        r: url.replace('!', '/'),
                        n: trimmedLine.replace(fullMatch, text)
                    }
                } else if (url.startsWith('http')) {
                    newObject = {
                        h: url,
                        n: trimmedLine.replace(fullMatch, text)
                    }
                }
                if (!pushToTips) {
                    steps.push(newObject);
                } else {
                    tips.push(newObject);
                }
            }
        } else {
            steps.push({
                n: trimmedLine,
            });
        }
    }
    return { 
        intros: intros, steps: steps, tags: tags, tips: tips
    };
}

const step_input = `
    歡迎參與開源共學島的共創：
    有興趣者請進行以下協同步驟：

    #參與 #協作 #開源

    1. 進入[Github開源共學島專案](https://github.com/bestian/colearna-open/)。
    2. 點選[參與本專案](https://github.com/bestian/colearna-open/wiki/%E5%8F%83%E8%88%87%E6%9C%AC%E5%B0%88%E6%A1%88(Join-Us))
    3. 透過網站註冊，加入共學島的測試會員，測試跑流。
    4. 請看[關於我們](!about)
`;


const step_output = {
"intros": [ "歡迎參與開源共學島的共創：", "有興趣者請進行以下協同步驟："],
"tags": ["參與", "協作", "開源"],
"steps": [
        { "n": "1. 進入開源共學島專案", "h": "https://github.com/bestian/colearna-open/" },
        { "n": "2. 點選參與本專案", "h": "https://github.com/bestian/colearna-open/wiki/%E5%8F%83%E8%88%87%E6%9C%AC%E5%B0%88%E6%A1%88(Join-Us)" },
        { "n": "3. 透過網站註冊，加入共學島的測試會員，測試跑流。"},
        { "r": "/about", "n": "4. 請看關於我們" }
    ]
}


 
const setp_input_complex = `
## 學習料理的步驟
學習料理，其實很簡單

#生活 #廚藝 #抒壓

1. 先在家裡廚房幫忙
2. 自然美食DIY網站
3. 關於我們

tips: 
1. 食物很好
2. 素物更好
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
    ],
    "tips": [
     "食物很好",
     "素食更好"
    ]
}

module.exports = { 
    parseMarkdownToSteps, 
    parseSimpleSteps,
    parseComplexSteps,
    step_input, step_output,
    setp_input_complex, step_output_complex
}