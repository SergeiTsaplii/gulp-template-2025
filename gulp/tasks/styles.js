import pkg from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import paths from '../config/paths.js';
const sass = gulpSass(dartSass);
const { src, dest } = pkg;

const includeSass = () => {
    return src(paths.styles.src)
        .pipe(sass())
        .pipe(dest(paths.styles.dist))
}