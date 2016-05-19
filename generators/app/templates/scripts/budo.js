require('budo')('src/index.js', {
    browserify: {
        debug: true,
    },

    dir: ['src/static', 'dist'],
    host: '0.0.0.0',
    live: true,
    open: true,
    portfind: true,
    pushstate: true,
    serve: 'assets/bundle.js',
    stream: process.stdout,

    watchGlob: [
        'src/**/*.{html,css,json}'
    ]
});
