module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "react/require-default-props": "off",
    "import/no-unresolved": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-tabs": "off",
    "no-underscore-dangle": "off",
    "no-trailing-spaces": "off",
	"max-len": 200
  },
  globals: {
    __IS_DEV__: true,
  },
};
