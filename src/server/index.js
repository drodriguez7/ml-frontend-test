/* eslint-disable import/no-extraneous-dependencies */
require('ignore-styles');

require('@babel/register')({
  presets: [
    [
      '@babel/preset-env',
      {
        'targets': { 'esmodules': true },
      },
    ],
    '@babel/preset-react'],
});

require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif'],
  name: '/assets/[hash].[ext]',
});

require('./server');
