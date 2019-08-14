/**
 * Created by s.neidig on 13/03/17.
 */

const SuperError = require('super-error');
const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'errors.json')) || '[]';
const json = JSON.parse(content);

json.forEach((error) => {
  SuperError.subclass(exports, error.name, function constructor(payload) {
    Object.keys(error).forEach((key) => {
      this[key] = error[key];
    });

    if (payload) {
      Object.keys(payload).forEach((key) => {
        this[key] = payload[key];
      });
    }
  });
});
