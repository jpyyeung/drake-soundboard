var gulp = require('gulp');
//var sass = require('sass');
//var autoprefixer = require('gulp-autoprefixer');
//var uglify = require('gulp-uglify');
var p = require('gulp-load-plugins')(); //once installed, 3 above lines can be omitted
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('styles', function() {
	gulp.src('source/style.scss')
		.pipe(p.sass())
		.pipe(p.autoprefixer())
		.pipe(gulp.dest('./build/css'))
		.pipe(reload({stream:true}))
	});

gulp.task('scripts', function() {
	gulp.src('source/drake.js')
		//.pipe(p.uglify())
		.pipe(gulp.dest('./build/'))
	});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './build'
			}
		})
	});


gulp.task('watch', function() {
	gulp.watch('source/style.scss', ['styles']);
	gulp.watch('source/drake.js', ['scripts']);
	});

gulp.task('default', ['styles', 'scripts', 'watch', 'browser-sync']);