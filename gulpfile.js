const { src, dest, watch, parallel, series } = require("gulp");

const pug = require("gulp-pug");
const rename = require("gulp-rename");

function html_gen(cb) {
  src("landing_page/src_view/*.pug")
    .pipe(rename({ extname: ".html" }))
    .pipe(pug())
    .pipe(dest("landing_page/public"));
  cb();
}

exports.html = html_gen;

// exports.default = series(parallel(html_gen));
exports.default = series(html_gen);
