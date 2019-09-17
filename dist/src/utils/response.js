"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var response = function response(res, statusCode, message, data) {
  return res.status(statusCode).send({
    statusCode: statusCode,
    data: data,
    message: message
  });
};

var _default = response;
exports["default"] = _default;