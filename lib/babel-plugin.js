"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _template = _interopRequireDefault(require("@babel/template"));

var _codecs = _interopRequireDefault(require("./codecs"));

var _formats = _interopRequireDefault(require("./formats"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var makeAST = function makeAST(varName, importName) {
  if (importName !== 'codecs' && importName !== 'formats') return null;
  return _template["default"].statement.ast("const ".concat(varName, " = ").concat(JSON.stringify(importName === 'codecs' ? _codecs["default"] : _formats["default"]), ";"));
};

var babelPlugin = function babelPlugin() {
  return {
    visitor: {
      ImportDeclaration: function ImportDeclaration(path) {
        var ast = makeAST(path.node.specifiers[0].local.name, path.node.source.value);
        if (!ast) return;
        path.replaceWith(ast);
      }
    }
  };
};

var _default = babelPlugin;
exports["default"] = _default;
//# sourceMappingURL=babel-plugin.js.map