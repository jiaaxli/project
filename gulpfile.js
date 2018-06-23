var gulp=require("gulp");
var sass=require("gulp-sass");
var connect = require("gulp-connect");

gulp.task("index",function(){
	gulp.src("*.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})
gulp.task("image",function(){
	gulp.src("img/**").pipe(gulp.dest("dist/images")).pipe(connect.reload());
})
gulp.task("js",function(){
	gulp.src("js/**").pipe(gulp.dest("dist/js")).pipe(connect.reload());
})
gulp.task("sass",function(){
	gulp.src("sass/*.scss").pipe(sass()).pipe(gulp.dest("dist/css")).pipe(connect.reload());
})
gulp.task("watch",function(){
	gulp.watch("*.html",["index"]);
	gulp.watch("sass/*.scss",["sass"]);
	gulp.watch("img/**",["image"]);
	gulp.watch("js/*.js",["js"]);
})
gulp.task("server",function(){
	connect.server({
		root:"dist",
		livereload:true
		});
})
gulp.task("default",["server","watch"]);