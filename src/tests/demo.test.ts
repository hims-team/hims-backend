import chai from 'chai';
import chaiHttp from 'chai-http';

import demoTest from '../demo/demo';

const { expect } = chai;
chai.use(chaiHttp);

describe('This is a demo test', () => {
  it('should return a true', (done) => {
    expect(true).equal(true);
    done();
  })
});

describe('area of a triangle', () => {
  it('should find the area of a triangle', (done) => {
    expect(demoTest(4, 5)).equal(10);
    done();
  });

  it('should return the area of another trianlge', () => {
    expect(demoTest(10, 10)).equal(50);
  });
});
