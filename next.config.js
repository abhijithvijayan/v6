// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withCSS, withSass, withImages, withFonts], {
    webpack(config, options) {
        return config;
    },
});
