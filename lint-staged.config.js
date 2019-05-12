//
module.exports = {
  linters: {
    'src/**/*.{js,jsx}': ['eslint', 'stylelint', 'prettier --write', 'git add'],
  },
};
