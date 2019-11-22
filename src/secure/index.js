/**
 * Created by appcom interactive GmbH on 22.11.2019
 * Copyright © 2019 appcom interactive GmbH. All rights reserved.
 */

const xssFilters = require('xss-filters');

module.exports = {
  encodeString: (string) => xssFilters.inHTMLData(string || '')
}
