"use strict";

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHolidays = exports.getCountries = void 0;

require("regenerator-runtime/runtime");

var _holidayapi = require("holidayapi");

require("dotenv/config");

var _statuscode = require("../utils/statuscode");

var _messages = require("../utils/messages");

var _response = _interopRequireDefault(require("../utils/response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var key = process.env.API_KEY;
var holidayApi = new _holidayapi.HolidayAPI({
  key: key
});

var getCountries =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _ref2, countries;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return holidayApi.countries();

          case 3:
            _ref2 = _context.sent;
            countries = _ref2.countries;
            return _context.abrupt("return", (0, _response["default"])(res, _statuscode.success, _messages.successMsg, countries));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", (0, _response["default"])(res, _statuscode.badRequest, _messages.errorMsg, _context.t0));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function getCountries(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getCountries = getCountries;

var getHolidays =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$params, country, month, _ref4, holidays;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$params = req.params, country = _req$params.country, month = _req$params.month;
            _context2.prev = 1;
            _context2.next = 4;
            return holidayApi.holidays({
              country: country,
              year: '2018',
              month: month
            });

          case 4:
            _ref4 = _context2.sent;
            holidays = _ref4.holidays;
            return _context2.abrupt("return", (0, _response["default"])(res, _statuscode.success, _messages.successMsg, holidays));

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", (0, _response["default"])(res, _statuscode.badRequest, _messages.errorMsg, _context2.t0));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));

  return function getHolidays(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getHolidays = getHolidays;