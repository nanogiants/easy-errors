/**
 * Created by appcom interactive GmbH on 15.04.2019
 * Copyright © 2019 appcom interactive GmbH. All rights reserved.
 */

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const faker = require('faker');
const lodash = require('lodash');
const validation = require('../../validation');
const errors = require('../../errors');

const expect = chai.expect;
chai.use(chaiAsPromised);

describe('function', () => {
  describe('where params is empty', () => {
    describe('and mandatory attributes are empty', () => {
      it('should resolve', () => {
        return expect(validation(undefined, [])).to.eventually.be.fulfilled;
      });
    });

    describe('and mandatory attributes are not empty', () => {
      it('should reject with missing parameters error', () => {
        const attribute = faker.random.word();

        return expect(validation(undefined, [attribute]))
          .to.eventually.be.rejectedWith(errors.MissingParametersError)
          .and.have.deep.property('detail', [`${attribute} is missing`]);
      });
    });
  });

  describe('where mandatory attributes are not set', () => {
    describe('and params is empty', () => {
      it('should resolve', () => {
        return expect(validation({}, undefined)).to.eventually.be.fulfilled;
      });
    });

    describe('and params is not empty', () => {
      it('should resolve', () => {
        const params = { key: faker.random.number() }

        return expect(validation(params, undefined)).to.eventually.be.fulfilled;
      });
    });
  });

  describe('where both params and mandatory attributes are not empty', () => {
    describe('some params are not in mandatory attributes', () => {
      it('should resolve', () => {
        const attributeCount = faker.random.number({ min: 5, max: 20 });
        const attributes = lodash.times(attributeCount, () => faker.random.word());
        const values = lodash.times(attributeCount, () => faker.random.word());
        const params = lodash.merge(lodash.zipObject(attributes, values), { extraKey: faker.random.word() });

        return expect(validation(params, attributes)).to.eventually.be.fulfilled;
      });
    });

    describe('some params are missing in mandatory attributes', () => {
      it('should reject with missing parameters error', () => {
        const attributeCount = faker.random.number({ min: 5, max: 20 });
        const attributes = lodash.times(attributeCount, () => faker.random.word());
        const values = lodash.times(attributeCount, () => faker.random.word());
        const params = lodash.zipObject(attributes, values);
        const missingKey = lodash.sample(attributes);

        lodash.unset(params, missingKey);

        return expect(validation(params, attributes))
          .to.eventually.be.rejectedWith(errors.MissingParametersError)
          .and.have.deep.property('detail', [`${missingKey} is missing`]);
      });
    });

    describe('params and mandatory attributes are the same', () => {
      it('should resolve', () => {
        const attributeCount = faker.random.number({ min: 5, max: 20 });
        const attributes = lodash.times(attributeCount, () => faker.random.word());
        const values = lodash.times(attributeCount, () => faker.random.word());
        const params = lodash.zipObject(attributes, values);

        return expect(validation(params, attributes)).to.eventually.be.fulfilled;
      });
    });

    describe('params contain falsey objects', () => {
      it('should resolve', () => {
        const attributeCount = faker.random.number({ min: 5, max: 20 });
        const attributes = lodash.times(attributeCount, () => faker.random.word());
        const values = lodash.times(attributeCount, () => faker.random.word());
        const falseyParams = { integer: 0, boolean: false, string: '', number: NaN };
        const params = lodash.merge(lodash.zipObject(attributes, values), falseyParams);

        return expect(validation(params, attributes.concat(lodash.keys(falseyParams)))).to.eventually.be.fulfilled;
      });
    });
  });
});
