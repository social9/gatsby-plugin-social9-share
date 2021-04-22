"use strict";

exports.onPreInit = function (_ref, options) {
  var reporter = _ref.reporter;

  if (!options.content) {
    reporter.warn("The Social9 SocialShare plugin requires a [content] Account Key. Did you mean to add it?");
  }
};