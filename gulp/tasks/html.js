import pkg from 'gulp';
import fileinclude from 'gulp-file-include';
import paths from '../config/paths.js';

const {src, dest} = pkg;

 const includeHtml = () => {
    return src(paths.html.src)
        .pipe(fileinclude())
        .pipe(dest(paths.html.dist))
}

export default includeHtml;