const 	gulp = require("gulp"),
		sass = require("gulp-sass"),
		pug = require("gulp-pug"),
		//autoprefixer = require("gulp-autoprefixer"),
		browserSync = require("browser-sync");


gulp.task('pug', ['sass'], function(){
	return gulp.src('./*.pug')
	.pipe(pug())
	.pipe(gulp.dest('./'))
	.pipe(browserSync.reload({stream: true}))
});
gulp.task('sass', function() {
	gulp.src('./sass/**/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('sass/*.sass', ['sass']);
	gulp.watch('./*.pug', ['pug']);
	gulp.watch('./*.html', browserSync.reload);
	gulp.watch('js/*.js', browserSync.reload);
	
});
