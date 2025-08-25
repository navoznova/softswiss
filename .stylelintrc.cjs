module.exports = {
    extends: [
      "stylelint-config-standard-scss",
      "stylelint-config-clean-order"
    ],
    plugins: ["stylelint-order"],
    rules: {
      "color-hex-length": "short",
      "alpha-value-notation": "number",
      "selector-class-pattern": "^[a-z0-9]+(?:__[a-z0-9]+)?(?:--[a-z0-9-]+)?$",
      "scss/at-import-partial-extension-blacklist": [".scss"],
      "declaration-block-no-redundant-longhand-properties": true
    },
    ignoreFiles: ["**/*.min.css", "**/dist/**"]
  };
  