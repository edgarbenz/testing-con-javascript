const {succesfulRequest, failedRequest} = require('./api');

describe('Callbacks: Testing Api requests', () => {
  it('failedRequest()', done => {
    expect.assertions(1);
    failedRequest().catch(error => {
      expect(error.message).toMatch(/failed/i);
      done();
    });
  });
  it('succesfulRequest()', done => {
    expect.assertions(1);
    succesfulRequest().then((data) => {
      expect(data.statusText).toBe('OK');
      done(); // done es de Jest y se tiene que ejecutar cuando la promise se resuelva
    }).catch(error => done(error));
  });
});

describe('Promises: Testing Api Requests', () => {
  it('successfulRequest()', () => {
    return succesfulRequest().then(data => {
      expect.assertions(2);
      return succesfulRequest().then(data => {
        expect(data.status).toBe(200);
        expect(data.statusText).toMatch(/ok/i);
      });
    })
  })
});

describe('Resolves/Rejects: Testing Api Promises', () => {
  it.skip('successfulRequest()', () => {
    return expect(successfulRequest()).resolves.toBeDefined();
  })
});

describe('Async & Await: Testing Api requests', () => {
  it('successfulRequest()', async () => {
    try {
      let result = await successfulRequest();
      expect(result.status).toEqual(200);
    } catch (error) {
      expect()
    }
  })
})