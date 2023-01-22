const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@assets': path.resolve(__dirname, './src/assets'),
    '@atoms': path.resolve(__dirname, './src/components/atoms'),
    '@constants': path.resolve(__dirname, './src/constants'),
    '@helpers': path.resolve(__dirname, './src/helpers'),
    '@hooks': path.resolve(__dirname, './src/hooks'),
    '@mixins': path.resolve(__dirname, './src/mixins'),
    '@molecules': path.resolve(__dirname, './src/components/molecules'),
    '@organisms': path.resolve(__dirname, './src/components/organisms'),
    '@pages': path.resolve(__dirname, './src/pages'),
    '@router': path.resolve(__dirname, './src/router'),
    '@store': path.resolve(__dirname, './src/store'),
    '@styles': path.resolve(__dirname, './src/styles'),
    '@templates': path.resolve(__dirname, './src/components/templates'),
    '@utils': path.resolve(__dirname, './src/utils'),
    '@views': path.resolve(__dirname, './src/components/views'),
  }),
);
