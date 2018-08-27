module.exports = {
  "parse": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "allowImportExportEverywhere": true,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module",
    "ecmaVersion": 2018
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      "tab"
    ],
    "indent": [
      "error",
      "tab",
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};