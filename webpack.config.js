import path from 'path';

module.exports = {
  rules: {
    test: /\.pug$/,
    loader: 'pug-plain-loader',
  },
  resolve: {
    alias: {
      styles: path.join(__dirname, 'src/styles'),
    },
  },
};

//
// module.rules = {
//   test: /\.pug$/,
//   loader: 'pug-plain-loader',
//   resolve: {
//     alias: {
//       styles: path.join(__dirname, 'src/styles'),
//     }
//   }
// };
//
