/* eslint-disable import/no-extraneous-dependencies */
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

require('./server');
