import browsersync from 'browser-sync';

const server = () => {
    browsersync.init({
        server: {
            baseDir: 'dist/'
        }
    });
}