const gulp = require("gulp"),
    gulpsync = require("gulp-sync")(gulp),
    clean = require("gulp-clean"),
    nodemon = require("gulp-nodemon");


gulp.task("clean", () => {
    return gulp.src("build", { read: false })
        .pipe(clean({ force: true }));
});


//  Copy
gulp.task("copy:html", () => {
    return gulp.src("src/**/*.html")
        .pipe(gulp.dest("build"));
});

gulp.task("copy", gulpsync.sync(["copy:html"]));

//  Lint
const stylint = require("gulp-stylint"),
    eslint = require("gulp-eslint"),
    tslint = require("gulp-tslint");


gulp.task("lint:styl", () => {
    return gulp.src("src/**/*.styl")
        .pipe(stylint())
        .pipe(stylint.reporter());
});

gulp.task("lint:js", () => {
    return gulp.src(["src/**/*.js", "!node_modules/**"])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("lint:ts", () => {
    return gulp.src(["src/**/*.ts", "!node_modules/**"])
        .pipe(tslint({ formatter: "verbose" }))
        .pipe(tslint.report());
});

gulp.task("lint", ["lint:styl", "lint:js", "lint:ts"]);

//  Compile
const ts = require("gulp-typescript"),
    stylus = require("gulp-stylus"),
    babel = require("gulp-babel");

gulp.task("compile:js", () => {
    return gulp.src("src/**/*.js")
        .pipe(babel({
            presets: ["es2015"]
        }))
        .pipe(gulp.dest("build"));
});

gulp.task("compile:ts", () => {
    return gulp.src("src/**/*.ts")
        .pipe(ts())
        .pipe(gulp.dest("build"));
});

gulp.task("compile:styl", () => {
    return gulp.src("src/**/*.styl")
        .pipe(stylus({ compress: true }))
        .pipe(gulp.dest("build"));
});

gulp.task("compile", gulpsync.sync(["compile:js", "compile:ts", "compile:styl"]));

//  Final

gulp.task("build", gulpsync.sync(["lint", "clean", "compile", "copy"]));

gulp.task("serve", ["build"], () => {
    nodemon({
        script: "./build/server.js",
        ext: "js ts html styl",
        env: { "NODE_ENV": "development" },
        tasks: ["build"]
    })
});