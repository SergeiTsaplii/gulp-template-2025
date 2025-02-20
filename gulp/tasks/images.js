import pkg from 'gulp';
import paths from '../config/paths.js';
const { src, dest } = pkg;

const copyImages = () => {
    return src(paths.images.src)
        .pipe(dest(paths.images.dist))
}