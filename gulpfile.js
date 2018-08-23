const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const pump = require("pump");

gulp.task("default", (cb) => {
    pump([
        gulp.src("index.js"),
        babel({
            presets: ["env"]
        }),
        uglify(),
        gulp.dest("dist/")
    ], cb);
});
