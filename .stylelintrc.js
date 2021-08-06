module.exports = {
  plugins: [],
  extends: 'stylelint-config-standard',
  rules: {
    "comment-empty-line-before": null,
    "function-name-case": ["lower", { "ignoreFunctions": ["/colorPalette/"] }],
    "no-invalid-double-slash-comments": null,
    "no-descending-specificity": null,
    "no-invalid-position-at-import-rule": null,
    "declaration-empty-line-before": null
  }
}