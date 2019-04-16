/**
 * Created by s.neidig on 13/03/17.
 */

const SuperError = require('super-error');
const lodash = require('lodash');
const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'errors.json')) || '[]';
const json = JSON.parse(content);

json.forEach((error) => {
  SuperError.subclass(exports, error.name, function constructor(payload) {
    const propagateAttribute = (value, key) => {
      this[key] = value;
    };

    lodash.mapKeys(error, propagateAttribute);

    if (payload) {
      lodash.mapKeys(payload, propagateAttribute);
    }
  });
});
