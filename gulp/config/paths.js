const paths = {
    html: {
        src: 'src/pages/*.html',
        dist: 'dist/',
        watch: [
            'src/pages/*.html',
            'src/html/**/*_html'
        ]
    },
    styles: {
        src: 'src/styles/*.scss',
        dist: 'dist/styles/',
        watch: [
            'src/styles/**/*.scss',
            'src/html/**/*.scss'
        ]
    },
    scripts: {},
    images: {
        src: 'src/images/**/*.*',
        dist: 'dist/images/',
        watch: 'src/images/**/*.*'
    }
}

export default paths;