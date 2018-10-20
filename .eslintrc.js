module.exports = {
  "parser": "babel-eslint",
  "extends": ["react-app", "airbnb", "plugin:react/recommended", "plugin:jest/recommended"],
  "plugins": ["react", "jest"],
  "rules": {
    "react/jsx-filename-extension": "off",
    "jsx-a11y/href-no-hash": "off",
    "react/prefer-stateless-function": "warn",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "no-return-assign": ["error", "except-parens"],
  },
  "env": {
    "jest/globals": true
  }
};
