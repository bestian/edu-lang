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

function parseMarkdownToStructure(markdownText) {
    const lines = markdownText.split('\n');
    const pattern = /\[(.*?)\]\((.*?)\)/;
    const steps = [];
    const intros = [];
    let foundNumber = false;

    for (const line of lines) {
        const trimmedLine = line.trim();
        
        // Skip empty lines
        if (!trimmedLine) {
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
            steps.push({
                h: matches[2],
                n: matches[1],
            });
        } else {
            steps.push({
                n: trimmedLine,
            });
        }
    }

    return {intros: intros, steps: steps};
}

const step_input = `
## 學習料理的步驟
學習料理，其實很簡單

#生活 #廚藝 #抒壓

1.先在家裡廚房幫忙
2.觀察外食店家的食材搭配
3.採購的時候，幫忙一起採購 
4.可以到[自然美食DIY網站](https://food.bestian.tw)找食譜
5.可以自己研發一些料理來嘗試看看
6.還可以借圖書館的一些食譜書，學習健康飲食
7.請看[關於我們](!about)`

module.exports = {
    countAge,
    parseMarkdownToStructure,
    step_input
};