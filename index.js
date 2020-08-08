module.exports = {
  extends: ["eslint:recommended", "plugin:compat/recommended"],
  parser: "espree",
  parserOptions: { ecmaVersion: 5, sourceType: "script" },
  env: {
    browser: true,
  },
  rules: {
    "no-unused-vars": 0,
    strict: ["error", "never"],
    "@typescript-eslint/no-unused-vars": "off",
    "dot-notation": "off",
    "compat/compat": ["error", "Android >= 4.1, iOS >= 7.0"],
  },
};
