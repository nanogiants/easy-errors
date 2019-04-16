/**
 * Created by appcom interactive GmbH on 15.04.2019
 * Copyright © 2019 appcom interactive GmbH. All rights reserved.
 */

process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const errors = require('../../errors');

describe('MissingParametersError', () => {
  let error;

  before((done) => {
    error = new errors.MissingParametersError();
    done();
  });

  it('should exist', (done) => {
    expect(error).to.exist;
    done();
  });

  it('should have the correct code', (done) => {
    expect(error.code).to.eq(10000);
    done();
  });

  it('should have the correct http status code', (done) => {
    expect(error.statusCode).to.eq(400);
    done();
  });

  it('should have the correct message', (done) => {
    expect(error.message).to.eq("Some parameters are missing");
    done();
  });
});

describe('InvalidParametersError', () => {

  let error;

  before((done) => {
    error = new errors.InvalidParametersError();
    done();
  });

  it('should exist', (done) => {
    expect(error).to.exist;
    done();
  });

  it('should have the correct code', (done) => {
    expect(error.code).to.eq(10001);
    done();
  });

  it('should have the correct http status code', (done) => {
    expect(error.statusCode).to.eq(400);
    done();
  });

  it('should have the correct message', (done) => {
    expect(error.message).to.eq('Some parameters are invalid');
    done();
  })
});
