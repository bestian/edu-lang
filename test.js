const assert = require('assert');

const { 
  autoId,
  countAge,
  countAgeDiff,
  parseTags,
  mdToURI,
  parseMarkdownToSteps,   // md:String =>  intros: Array, tags: Array, steps ==> Array  
  parseSimpleSteps,  //  md:String =>  steps ==> Array  
  parseComplexSteps, //  md:String =>  title:String, intros: Array, img:String, tags: Array, steps ==> Array  
  step_input,
 } = require('./index.js');

const step_output = {
  "intros": [ "## 學習料理的步驟", "學習料理，其實很簡單"],
  "tags": ["生活", "廚藝", "抒壓"],
  "steps": [
    { "n": "1.先在家裡廚房幫忙" },
    { "n": "2.觀察外食店家的食材搭配" },
    { "n": "3.採購的時候，幫忙一起採購" },
    { "h": "https://food.bestian.tw", "n": "4.自然美食DIY網站" },
    { "n": "5.可以自己研發一些料理來嘗試看看" },
    { "n": "6.還可以借圖書館的一些食譜書，學習健康飲食" },
    { "r": "about", "n": "關於我們" }
  ]
}

const step_output_complex = {
  "title": "## 學習料理的步驟",
  "intros": ["學習料理，其實很簡單"],
  "imgs": [],
  "tags": ["生活", "廚藝", "抒壓"],
  "steps": [
    { "n": "1.先在家裡廚房幫忙" },
    { "n": "2.觀察外食店家的食材搭配" },
    { "n": "3.採購的時候，幫忙一起採購" },
    { "h": "https://food.bestian.tw", "n": "4.自然美食DIY網站" },
    { "n": "5.可以自己研發一些料理來嘗試看看" },
    { "n": "6.還可以借圖書館的一些食譜書，學習健康飲食" },
    { "r": "about", "n": "關於我們" }
  ]
}

describe('parseMarkdownToSteps', function () {
  it(`lines before numbers should be intros,
    lines started with numbers should be steps.
    objects in steps should have "n", perhaps have h(href) or r(inner router links) 
    `, function () {
      assert.deepStrictEqual(parseMarkdownToSteps(step_input),step_output)
      // add Error case ....
  });

  it(`simple steps only.`, function () {
      assert.deepStrictEqual(parseSimpleSteps(step_input), step_output.steps)
      // add Error case ....
  });

  it(`complex case should contain imgs.`, function () { //  md:String =>  title:String, intros: Array, img:String, tags: Array, steps ==> Array
    assert.deepStrictEqual(parseComplexSteps(step_input),  step_output_complex)
      // add Error case ....
  });

  /* 

    parseSimpleTable          =>  take and parse ./data_table/*.txt
    parseComplexTable         =>  take and parse ./data_table_with_href/*.txt


  */
});


describe('parseTags', function () {
  it(`split a tags list`,  () => {
    assert.deepStrictEqual(parseTags(''), []); // null case
    assert.deepStrictEqual(parseTags('foo,bar,baz'), ['foo','bar','baz']);
    assert.deepStrictEqual(parseTags('foo'),['foo']);
              // add Error case ....
  });
});

describe('mdToURI', function () {
  it(`minify a markdown and make it to URI`, function () {
    assert.strictEqual(mdToURI(`
        foo
        bar

        baz
      `), 'foo%20bar%20baz%20');
  });
});

describe('countAge', function () {
  it(`count a child's age by birthday(like '1985-04-01')= + ' ' + countAge('1985-04-01')`, function () {
      assert.strictEqual(countAge('1985-04-01'),countAge('1985-04-01'))
      assert.strictEqual(countAgeDiff('2000-04-04','1985-04-01'),15)
      // add Error case ....
  });
});


describe('autoId', function () {
  it(`make a autoId by name`, function () {
      assert.strictEqual(autoId('foo'),autoId('foo'))
      // add Error case ....
  });
});


