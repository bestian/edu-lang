const { 
  countAge,
  parseMarkdownToStructure, 
  step_input
 } = require('./index.js');

const output = {
  "intros": [ "## 學習料理的步驟", "學習料理，其實很簡單"],
  "tags": ["生活", "廚藝", "抒壓"],
  "steps": [
    { "n": "1.先在家裡廚房幫忙" },
    { "n": "2.觀察外食店家的食材搭配" },
    { "n": "3.採購的時候，幫忙一起採購" },
    { "h": "https://food.bestian.tw", "n": "自然美食DIY網站" },
    { "n": "5.可以自己研發一些料理來嘗試看看" },
    { "n": "6.還可以借圖書館的一些食譜書，學習健康飲食" },
    { "r": "about", "n": "關於我們" }
  ]
}


describe('countAge', function () {
  it(`count a child's age by birthday(like '1985-04-01')= + ' ' + countAge('1985-04-01')`, function () {
      return countAge('1985-04-01') == countAge('1985-04-01')
  });
});

describe('parseMarkdownToStructure', function () {
  it(`lines before numbers should be intros,
    lines started with numbers should be steps.
    objects in steps should have "n", perhaps have h(href) or r(inner router links) 
    `, function () {
      return parseMarkdownToStructure(step_input) == output
  });
});