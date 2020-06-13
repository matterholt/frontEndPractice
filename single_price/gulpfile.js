const { src, dest, watch, parallel, series } = require("gulp");

const pug = require("gulp-pug");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const sync = require("browser-sync").create();

const fileLoc = {
  scss: "src_view/sass/**/*.scss",
  js: "src_view/js/**/*.js",
  htmlPug: "src_view/*.pug",
};

const temp_env = "";

function gen_css(cb) {
  // file location
  return (
    src(fileLoc.scss)
      // compile sass
      .pipe(sass().on("error", sass.logError))
      // where to save it
      .pipe(dest("public/stylesheets"))
      .pipe(sync.stream())
  );
  cb();
}

function html_gen(cb) {
  return src(fileLoc.htmlPug)
    .pipe(rename({ extname: ".html" }))
    .pipe(pug({ pretty: true }))
    .pipe(dest("public"));
  cb();
}

function watchFile() {
  sync.init({
    server: {
      baseDir: "./public",
      index: "/index.html",
    },
  });
  // watch(fileLoc.htmlPug, html_gen);
  watch(fileLoc.scss, gen_css);
  watch("./*.html").on("change", sync.reload);
}

exports.css = gen_css;
// exports.html = html_gen;
// exports.watch = watchFile;

// exports.sync = browserSync;
// exports.default = series(parallel(html_gen, gen_css));
// exports.css = gen_css;
// exports.html = html_gen;
exports.watch = watchFile;
