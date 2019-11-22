/**
 * Created by appcom interactive GmbH on 16.04.2019
 * Copyright © 2019 appcom interactive GmbH. All rights reserved.
 */

process.env.NODE_ENV = 'test';

const expect = require('chai').expect;

const index = require('../index');

describe('validation', () => {
  it('should expose the validation', () => {
    expect(index.validation).to.exist;
    expect(index.validation).to.be.a('function');
  });
});

describe('errors', () => {
  it('should expose the errors', () => {
    expect(index.errors).to.exist;
    expect(index.errors).to.be.an('object');
  });
});

describe('secure', () => {
  it('should expose the secure', () => {
    expect(index.secure).to.exist;
    expect(index.secure.encodeString).to.exist;
    expect(index.secure.encodeString).to.be.a('function');
  });
});
