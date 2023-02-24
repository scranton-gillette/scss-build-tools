const mix = require('laravel-mix');

mix.disableSuccessNotifications();
mix.setPublicPath('dist');

mix.sass('./src/scss/main.scss', './css')
    .options({ processCssUrls: false, })
    .sourceMaps(true, 'source-map')
    .webpackConfig({devtool: 'source-map'});

mix.js([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/@popperjs/core/dist/umd/popper.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './src/js/app.js',
], './js/app.js');