import pkg from 'gulp';
import fileinclude from 'gulp-file-include';
import paths from '../config/paths.js';
const { src, dest } = pkg; 

const includeFiles = () => {
    return src(paths.html.src)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
          }))
        .pipe(dest(paths.html.dist))
}