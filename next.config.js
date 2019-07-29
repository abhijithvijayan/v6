// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withCSS, withSass, withImages], {
    webpack(config) {
        return config;
    },
});
