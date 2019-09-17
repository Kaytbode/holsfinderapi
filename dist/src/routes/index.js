"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _holiday = require("../controllers/holiday");

var routes = (0, _express.Router)();
routes.get('/', function (req, res) {
  return res.status(200).send('Welcome to holsfinder');
});
routes.get('/api/v1/countries', _holiday.getCountries);
routes.get('/api/v1/holidays/:country/:month', _holiday.getHolidays);
var _default = routes;
exports["default"] = _default;