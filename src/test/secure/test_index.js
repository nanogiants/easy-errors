/**
 * Created by appcom interactive GmbH on 16.04.2019
 * Copyright © 2019 appcom interactive GmbH. All rights reserved.
 */

process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const faker = require('faker');
const index = require('../../secure');

describe('#encodeString', () => {
  describe('where string is not set', () => {
    it('should return an empty string', () => {
      const result = index.encodeString();
      expect(result).to.eq('');
    });
  });

  describe('where string is set', () => {
    describe('and nothing needs to be encoded', () => {
      it('should return the string', () => {
        const string = faker.random.word();

        const result = index.encodeString(string);
        expect(result).to.eq(string);
      });
    });

    describe('and something has to be encoded', () => {
      it('should return the encoded string', () => {
        const random = faker.random.word();
        const string = `<script>${random}</script>`;

        const result = index.encodeString(string);
        expect(result).to.eq(`&lt;script>${random}&lt;/script>`);
      });
    });
  });
});
