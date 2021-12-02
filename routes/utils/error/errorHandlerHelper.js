const ErrorClass = require("./ErrorClass");

function handleCastErrorDB(err){}

function handleDuplicateFieldsDB(err){}

function handleValidationErrorDB(err){}

function handleJWTExpired(){}

function handleJWTExpiredError(){}

function sendErrorDev(err, req, res){}

function sendErrorProd(err, req, res){}

function erroHandlerFunction  (err, req, res) {}

module.exports = erroHandlerFunction;