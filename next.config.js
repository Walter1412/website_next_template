const path = require('path');
const i18n = require('./next-i18next.config');
console.log('i18n :>> ', i18n);
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    loader: 'imgix',
    path: '',
  },
  ...i18n,
};
