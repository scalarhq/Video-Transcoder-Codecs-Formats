"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _codecs = _interopRequireDefault(require("./codecs"));

var _formats = _interopRequireDefault(require("./formats"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return {
    name: "video-transcoder-codecs-formats",
    resolveId: function resolveId(source) {
      if (source === "codecs" || source === "formats") return source;
      return null;
    },
    load: function load(id) {
      if (id === "codecs") return "export default ".concat(JSON.stringify(_codecs["default"]));
      if (id === "formats") return "export default ".concat(JSON.stringify(_formats["default"]));
      return null;
    }
  };
};

exports["default"] = _default;
//# sourceMappingURL=plugin.js.map