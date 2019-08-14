# easy-errors

![npm](https://img.shields.io/npm/v/easy-errors.svg)

This is a package for validating an object for presence of mandatory attributes. 
It also provides some errors you can use.

## Installation

`npm install easy-errors`

## Usage
### Validation
When you provide data in form of an object for an interface (e.g. method, http interface, ...) you sometimes rely 
on attributes that have to be present. There is a validation method, which does exactly that.

    const { validation } = require('easy-errors');
    
    try {
      // call validation method. First parameter is the data, which should be tested. Second parameter is a 
      // list of attributes, which must be set in the data object (i.e. first parameter). If validation succeeds
      // the promise resolves without a value. If not it rejects with a MissingParametersError.
      
      await validation({ key: 10 }, ['key', 'test']);
      
      // [...] 
    } catch(error) {
      console.error(error);
      # -> MissingAttributesError: 'test' is missing
    }

### Errors
When propagating errors you often want some meta data attached to it (e.g. code, message, ...). Maintaining this is 
cumbersome and should be done descriptively. This package introduces common errors with useful meta information 
attached to it that you can use. Also the validation method uses them as well!
    
    const { errors } = require('easy-errors');
    throw new errors.MissingParametersError();
    
You can be provide an object with more meta data, which will be added to the error.    
        
    const { errors } = require('easy-errors');
    throw new errors.MissingParametersError({ detail: ['There is something wrong'], success: false });
    
See a full list of the introduced errors:

| Name | Message | Code | Status Code | 
|:-|:-|:-|:-|
| MissingParametersError | Some parameters are missing | 10000 | 400 |
| InvalidParametersError | Some parameters are invalid | 10001 | 400 |
| NotFoundError | The requested resources was not found | 10002 | 404 |
| ForbiddenError  | You are not allowed to perform this action | 10003 | 403 |
| UnauthorizedError | There was an error with the authorization | 10004 | 401 |
| ConfigurationError | There was an configuration error | 10005 | 500 |  
| TopicNotFoundError | The requested topic is not available or was not found | 10006 | 404 |  
| SubscriptionError | The device could not be subscribed to the topic | 10007 | 500 |  
| EndpointNotFoundError | The requested endpoint is not available or was not found | 10008 | 404 |  

The Status Code is a value, which is a recommendation as a response status, when dealing with HTTP/S. The Code is something
to identify the error by. 

## License

Copyright 2019 appcom interactive GmbH

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
