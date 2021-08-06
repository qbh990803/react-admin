module.exports = {
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-config-prettier'],
  rules: {
    "comment-empty-line-before": null,
    "function-name-case": ["lower", { "ignoreFunctions": ["/colorPalette/"] }],
    "no-invalid-double-slash-comments": null,
    "no-descending-specificity": null,
    "no-invalid-position-at-import-rule": null,
    "declaration-empty-line-before": null,
    "plugin/declaration-block-no-ignored-properties": true
  }
}