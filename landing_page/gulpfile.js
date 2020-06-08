const { src, dest, watch, parallel, series } = require("gulp");

const pug = require("gulp-pug");
const sass = require("gulp-sass");
const rename = require("gulp-rename");

function html_gen(cb) {
  src("src_view/*.pug")
    .pipe(rename({ extname: ".html" }))
    .pipe(pug({ pretty: true }))
    .pipe(dest("public"));
  cb();
}

function gen_css(cb) {
  src("src_view/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("public/stylesheets"));
  cb();
}

exports.css = gen_css;
exports.html = html_gen;

// exports.default = series(parallel(html_gen));
exports.default = series(parallel(html_gen, gen_css));
