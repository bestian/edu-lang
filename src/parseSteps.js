
function parseMarkdownToSteps(markdownText) {
    const lines = markdownText.split('\n');
    const pattern_n = /(.{1,})/;
    const pattern_D = /^(\d+)\.?.{1,}$/;
    const pattern_D2 = /^(\d+)\.?.*\[(.*?)\]\((.*?)\).$/;
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
                r: url.slice(1),
                n: trimmedLine.replace(fullMatch, text),
            };
            } else {
            newObject = {
                h: url,
                n: trimmedLine.replace(fullMatch, text),
            };
            }
            steps.push(newObject);
        }
        } else {
        steps.push({
            n: trimmedLine.replace(pattern_href, ''),
        });
        }
    }
    return { intros: intros, steps: steps };
}

function parseSimpleSteps(markdownText) {
    return parseMarkdownToSteps(markdownText).steps
}

function parseComplexSteps(markdownText) {
    var obj = parseMarkdownToSteps(markdownText).steps
    var intros = parseMarkdownToSteps(markdownText).intros
    obj.title = (intros || []).unshift()
    obj.intros = (intros.filter(x => !x.match(/\.(jpg|png|gif|webp)$/)))[0]
    obj.imgs = ((intros.filter(x => x.match(/\.(jpg|png|gif|webp)$/)))[0] || []).filter(x => x.trim())  // 有可能是空陣列
    return obj
}



const step_input = `
## 學習料理的步驟
學習料理，其實很簡單

#生活 #廚藝 #抒壓

1.先在家裡廚房幫忙
2.觀察外食店家的食材搭配
3.採購的時候，幫忙一起採購 
4.可以到[自然美食DIY網站](https://food.bestian.tw)
5.可以自己研發一些料理來嘗試看看
6.還可以借圖書館的一些食譜書，學習健康飲食
7.請看[關於我們](!about)`

module.exports = { 
    parseMarkdownToSteps, 
    parseSimpleSteps,
    parseComplexSteps,
    step_input 
}