const assert = require('assert');

const { 
  autoId,
  countAge,
  countAgeDiff,
  parseTags,
  mdToURI,
  parseMarkdownToSteps,   // md:String =>  intros: Array, tags: Array, steps ==> Array  
  parseSimpleSteps,  //  md:String =>  steps ==> Array  
  step_input, step_output,
 } = require('./index.js');


console.log(parseMarkdownToSteps(step_input));


describe('parseMarkdownToSteps', function () {
  it(`lines before numbers should be intros,
    lines started with numbers should be steps.
    objects in steps should have "n", perhaps have h(href) or r(inner router links) 
    `, function () {
      assert.deepStrictEqual(parseMarkdownToSteps(step_input),step_output)
      // add Error case ....
  });
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
  });
});


