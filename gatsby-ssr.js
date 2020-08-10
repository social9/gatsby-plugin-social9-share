"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(require("react"));

var onRenderBody = function onRenderBody(_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;

  if (!pluginOptions.content) {
    return null;
  }


  return setPostBodyComponents([/*#__PURE__*/_react.default.createElement("script", {
    key: "gatsby-plugin-social9-socialshare",
    id: "s9-sdk",
    async: pluginOptions['async']?pluginOptions['async']:true,
    defer: pluginOptions['defer']?pluginOptions['defer']:true,
    content: pluginOptions['content'],
    src: "//cdn.social9.com/js/socialshare.min.js"
  })]);
};

exports.onRenderBody = onRenderBody;