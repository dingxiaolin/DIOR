const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("html", done => {
    gulp.src("./*.html").pipe(gulp.dest("dist/html")).pipe(connect.reload());
    done();
})
gulp.task("indexhtml", done => {
    gulp.src("index.html").pipe(gulp.dest("dist")).pipe(connect.reload());
    done();
})

gulp.task("css", done => {
    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        // .pipe(sass({ outputStyle: "compressed" }))
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
    done();
});
// img
gulp.task("img", done => {
    gulp.src("img/**")
        .pipe(gulp.dest("dist/img"))
        .pipe(connect.reload());;
    done();
});
// 将js文件进行压缩，生成压缩文件和拷贝原文件
gulp.task("js", done => {
    gulp.src("js/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());

    done();
});

//将高版本的js转换成ES5
gulp.task("babel", done => {
    gulp.src("js/*.js")
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());
    done();
})

gulp.task("bootstrap", done => {
    gulp.src("bootstrap/**")
        .pipe(gulp.dest("dist/bootstrap"))
        .pipe(connect.reload());;
    done();
})

//监听文件变化，一旦监听的文件发生变化，就执行指定的任务
gulp.task("watch", done => {
    gulp.watch("index.html", gulp.series("indexhtml"));
    gulp.watch("*.html !index.html", gulp.series("html"));
    gulp.watch("sass/*.scss", gulp.series("css"));
    gulp.watch("js/*.js", gulp.series("js"));
    gulp.watch("img/**", gulp.series("img"));

    done();
})
//创建服务器
gulp.task("server", done => {

    connect.server({
        root: "dist",
        livereload: true
    })

    done();
});
gulp.task("build", gulp.series("indexhtml", "html", "css", "js", "img", "babel", "bootstrap"));
gulp.task("default", gulp.series("build", "server", "watch"));