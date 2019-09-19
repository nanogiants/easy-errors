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

describe('ConfigurationError', () => {
  let error;

  before((done) => {
    error = new errors.ConfigurationError();
    done();
  });

  it('should exist', (done) => {
    expect(error).to.exist;
    done();
  });

  it('should have the correct code', (done) => {
    expect(error.statusCode).to.eq(500);
    done();
  });

  it('should have the correct http status code', (done) => {
    expect(error.message).to.eq('There was an configuration error');
    done();
  });
});

describe('TopicNotFoundError', () => {
  let error;

  before((done) => {
    error = new errors.TopicNotFoundError();
    done();
  });

  it('should exist', (done) => {
    expect(error).to.exist;
    done();
  });

  it('should have the correct code', (done) => {
    expect(error.statusCode).to.eq(404);
    done();
  });

  it('should have the correct http status code', (done) => {
    expect(error.message).to.eq('The requested topic is not available or was not found');
    done();
  });
});

describe('SubscriptionError', () => {
  let error;

  before((done) => {
    error = new errors.SubscriptionError();
    done();
  });

  it('should exist', (done) => {
    expect(error).to.exist;
    done();
  });

  it('should have the correct code', (done) => {
    expect(error.statusCode).to.eq(500);
    done();
  });

  it('should have the correct http status code', (done) => {
    expect(error.message).to.eq('The device could not be subscribed to the topic');
    done();
  });
});

describe('EndpointNotFoundError', () => {
  let error;

  before((done) => {
    error = new errors.EndpointNotFoundError();
    done();
  });

  it('should exist', (done) => {
    expect(error).to.exist;
    done();
  });

  it('should have the correct code', (done) => {
    expect(error.statusCode).to.eq(404);
    done();
  });

  it('should have the correct http status code', (done) => {
    expect(error.message).to.eq('The requested endpoint is not available or was not found');
    done();
  });
});

describe('ConflictError', () => {
  let error;

  before((done) => {
    error = new errors.ConflictError();
    done();
  });

  it('should exist', (done) => {
    expect(error).to.exist;
    done();
  });

  it('should have the correct code', (done) => {
    expect(error.statusCode).to.eq(409);
    done();
  });

  it('should have the correct http status code', (done) => {
    expect(error.message).to.eq('The request could not be completed due to a conflict with the current state of the target resource');
    done();
  });
});

