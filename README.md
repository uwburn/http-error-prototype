# HTTP error

A simple module to deal coherently with HTTP errors in Express. Has conveniency methods for the most commons HTTP error codes. See `http-error-express` for the companion error handling middleware. 

### Usage

```javascript
var express = require('express');
var HttpError = require('http-error');

var router = express.Router();

// Shorthand method
router.get('/shorthand', function(req, res, next) {
	return next(HttpError.notFound("Some not found message", { someProp: "someVal" }));
});

// Constructor
router.get('/constructor', function(req, res, next) {
	return next(new HttpError(404, "Some not found message", { someProp: "someVal" }));
});

module.exports = router;
```

### API
- `new HttpError(status, message, data)`.
- ` HttpError.badRequest(status, message, data)`.
- ` HttpError.unauthorized(status, message, data)`.
- ` HttpError.forbidden(status, message, data)`.
- ` HttpError.notFound(status, message, data)`.
- ` HttpError.methodNotAllowed(status, message, data)`.
- ` HttpError.notAcceptable(status, message, data)`.
- ` HttpError.requestTimeout(status, message, data)`.
- ` HttpError.conflict(status, message, data)`.
 
Both `message` and `data` are optional.
