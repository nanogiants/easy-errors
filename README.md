# easy-errors

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![npm version](https://badge.fury.io/js/eslint-config-appcom.svg)](https://badge.fury.io/js/eslint-config-appcom)

This is a package for validating an object for presence of mandatory attributes. 
It also provides some errors you can use.

## Installation

`npm install easy-errors`

## Usage

    const { validation, errors } = require('easy-errors');
    
    # validation
    try {
      await validation({ key: 10 }, ['key', 'test']);
    } catch(error) {
      console.error(error);
      # -> MissingAttributesError: test is missing
    }
    
    # errors
    
    throw new errors.MissingParametersError({ detail: ['There is something wrong']);

## License

Copyright 2019 appcom interactive GmbH

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
