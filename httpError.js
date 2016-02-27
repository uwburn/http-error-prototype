var HttpError = function(status, message, data) {
	this.status = status;
	this.message = message;
	this.data = data;
	this.stack = Error().stack;
};

HttpError.prototype = Object.create(Error.prototype);
HttpError.prototype.name = "HttpError";
HttpError.prototype.constructor = HttpError.ApiError;

HttpError.badRequest = function(message, data) {
	return new HttpError(400, message, data);
}

HttpError.unauthorized = function(message, data) {
	return new HttpError(401, message, data);
}

HttpError.forbidden = function(message, data) {
	return new HttpError(403, message, data);
}

HttpError.notFound = function(message, data) {
	return new HttpError(404, message, data);
}

HttpError.methodNotAllowed = function(message, data) {
	return new HttpError(405, message, data);
}

HttpError.notAcceptable = function(message, data) {
	return new HttpError(406, message, data);
}

HttpError.requestTimeout = function(message, data) {
	return new HttpError(408, message, data);
}

HttpError.conflict = function(message, data) {
	return new HttpError(409, message, data);
}

module.exports = HttpError;
