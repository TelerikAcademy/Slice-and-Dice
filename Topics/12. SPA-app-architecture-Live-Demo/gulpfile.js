const gulp = require("gulp");
const gulpsync = require("gulp-sync")(gulp);

const babel = require("gulp-babel");

const stylus = require("gulp-stylus");

const nodemon = require("gulp-nodemon");

const clean = require("gulp-clean");

gulp.task("clean", function() {
    return gulp
        .src("build", {
            read: false,
        })
        .pipe(clean());
});

gulp.task("compile:js", () => {
    return gulp.src("./src/static/**/*.js")
        .pipe(babel({
            presets: ["es2015"],
        }))
        .pipe(gulp.dest("./build/static"));
});

gulp.task("compile:stylus", () => {
    return gulp.src("./src/**/*.styl")
        .pipe(stylus())
        .pipe(gulp.dest("./build"));
});

gulp.task("compile", ["compile:js", "compile:stylus"]);

gulp.task("copy:all", () => {
    return gulp
        .src([
            "./src/**/*.html",
            "./src/**/*.js",
            "./src/**/*.pug",
            "./src/**/*.css",
            "!./src/static/**/*.js",
        ])
        .pipe(gulp.dest("./build"));
});

gulp.task("copy", ["copy:all"]);

gulp.task("build", gulpsync.sync(["clean", "compile", "copy"]));

gulp.task("serve", ["build"], () => {
    nodemon({
        script: "./build/server.js",
        ext: "js html pug css styl",
        ignore: ["build"],
        tasks: ["build"],
    });
});