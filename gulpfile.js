const 	gulp = require("gulp"),
		sass = require("gulp-sass"),
		pug = require("gulp-pug"),
		autoprefixer = require("gulp-autoprefixer"),
		browserSync = require("browser-sync").create();


gulp.task('pug', function(){
	return gulp.src('./src/*.pug')
	.pipe(pug({
		pretty:true
	}))
	.pipe(gulp.dest('./build/'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('sass', function() {
	gulp.src('./src/sass/**/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('./build/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('watch', ['browserSync','pug','sass'], function(){
	gulp.watch('./src/sass/*.sass', ['sass']);
	gulp.watch('./src/**/*.pug', ['pug']);
	gulp.watch('./build/*.html', browserSync.reload);
	gulp.watch('./src/js/*.js', browserSync.reload);
	
});
