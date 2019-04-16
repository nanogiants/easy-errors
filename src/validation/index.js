/**
 * Created by appcom interactive GmbH on 15.04.2019
 * Copyright © 2019 appcom interactive GmbH. All rights reserved.
 */

const errors = require('../errors');

module.exports = async (params = {}, mandatoryAttributes = []) => {
  const missingAttributes = mandatoryAttributes.filter(attribute => (
    params[attribute] === null || params[attribute] === undefined
  ));

  if (missingAttributes.length > 0) {
    const detail = missingAttributes.map(attribute => `${attribute} is missing`);
    return Promise.reject(new errors.MissingParametersError({ detail }));
  }

  return Promise.resolve();
};
