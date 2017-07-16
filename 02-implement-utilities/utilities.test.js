const util = require('./index');

describe('falsy', () => {
  it('false', () => {
    expect(util.falsy(false).toBe(true));
  });
})