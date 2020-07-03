const gulp = require('gulp');
let uglify = require('gulp-uglify-es').default;
const cleanCSS = require('gulp-clean-css');
// function html() {
//     return gulp.src("src/*.html")
//         .pipe(gulp.dest('build'));
// }
gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(gulp.dest('build'));
})
gulp.task('minify', () => {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('build/css'));
});
gulp.task("uglify", function () {
    return gulp.src("src/js/*.js")
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("build/js"));
});
gulp.task('watch', function () {
    gulp.watch('src/css/*.css', gulp.parallel('minify'));
    gulp.watch('src/*.html', gulp.parallel('html'))
    gulp.watch('src/js/*.js', gulp.parallel('uglify'))
});
// exports.html = html;