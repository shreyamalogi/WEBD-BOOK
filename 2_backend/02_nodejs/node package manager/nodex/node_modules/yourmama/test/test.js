const assert = require('assert');
const yomama = require('../index.js');

describe('getting stuff', function () {
  it('.getRoast() returns the first joke of the fat ones', async () => {
    assert.strictEqual(await yomama.getRoast({
      type: 'fat',
      id: 0
    }), "Yo mama is so fat that her bellybutton gets home 15 minutes before she does.");
  });
  it('.getRoast() returns the first ugly joke', async () => {
    assert.strictEqual(await yomama.getRoast({
      type: 'ugly',
      id: 0
    }), "Yo mama is so ugly that when she went to a beautician it took 12 hours... to get a quote!");
  });
  it('.getID shoud get the first one', async () => {
    assert.strictEqual(await yomama.getID(0), "Yo mama is so fat that her bellybutton gets home 15 minutes before she does.");
  });
  it('should not die running .getRoast with partial args and return promise', async function () {
    yomama.getRoast({id: 0}).then(res => assert.equalExact("Yo mama is so fat that her bellybutton gets home 15 minutes before she does.", res))
  });

})
describe('misc array stuff', function () {
  it('should not die running .getRandom', async function (done) {
    await yomama.getRandom().then(done())
  });
  it('should not die running .getRandomTopic', async function (done) {
    await yomama.getRandomTopic('fat').then(done())
  });
  it('should not die running .getRoast without args', async function () {
    yomama.getRoast().then(res => assert.equalExact('string', typeof res))
  });
  it('should not die running .getRoast with topic args and return string', async function () {
    yomama.getRoast({
      topic: 'fat'
    }).then(res => assert.equalExact('string', typeof res))
  });
})
