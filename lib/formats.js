"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _codecs = _interopRequireDefault(require("./codecs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var DIR_NAME = "../formats";
var FORMAT_TYPES = {};

var init = function init(CODEC_TYPES) {
  console.log(CODEC_TYPES);
  var errs = [];

  _fs["default"].readdirSync(_path["default"].join(__dirname, DIR_NAME)).filter(function (file) {
    return file.slice(file.length - 3) === ".js" && file !== _path["default"].basename(__filename);
  }).map(function (file) {
    return [file.slice(0, -3).replace("-", "").replace(".", "").replace(" ", "_").toUpperCase(), require(_path["default"].join(__dirname, DIR_NAME, file))(CODEC_TYPES)];
  }).forEach(function (e) {
    var err = validateFormat.apply(void 0, _toConsumableArray(e));

    if (err) {
      errs.push(err);
    } else {
      FORMAT_TYPES[e[0]] = e[1];
    }
  });

  if (errs.length !== 0) throw new Error("Error(s) occurred while parsing: ".concat(errs.join(", ")));
  return FORMAT_TYPES;
};

var validateFormat = function validateFormat(key, format) {
  var propNames = ["name", "extension", "display", "codecs"];
  var err;
  propNames.forEach(function (name) {
    if (format[name] === null || format[name] === undefined) err = new Error("Missing required format property: ".concat(name));
  });
  if (err) return err;
  if (format.extension.charAt(0) !== ".") return new Error("Invalid extension");
  if (format.display !== true && format.display !== false) return new Error("Invalid value for display");
  if (format.codecs.includes(undefined)) return new Error("Invalid codec");
  if (FORMAT_TYPES[key]) return new Error("Format type for: (".concat(key, ") already exists"));
};

var _default = init(_codecs["default"]);

exports["default"] = _default;
//# sourceMappingURL=formats.js.map