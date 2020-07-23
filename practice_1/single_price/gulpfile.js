const { src, dest, watch, parallel, series } = require("gulp");

const pug = require("gulp-pug");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const sync = require("browser-sync").create();
var reload = sync.reload;

const fileLoc = {
  scss: "src_view/sass/**/*.scss",
  js: "src_view/js/**/*.js",
  htmlPug: "src_view/*.pug",
};

const temp_env = "";

function gen_css() {
  // file location
  return (
    src(fileLoc.scss)
      // compile sass
      .pipe(sass().on("error", sass.logError))
      // where to save it
      .pipe(dest("public/stylesheets"))
      .pipe(sync.stream())
  );
}

function html_gen() {
  return src(fileLoc.htmlPug)
    .pipe(rename({ extname: ".html" }))
    .pipe(pug({ pretty: true }))
    .pipe(dest("public"))
    .pipe(sync.stream());
  cb();
}

function watchFile() {
  sync.init({
    server: {
      baseDir: "./public",
    },
  });
  watch(fileLoc.scss, gen_css);
  watch(fileLoc.htmlPug, html_gen).on("change", sync.reload);
}

exports.css = gen_css;
exports.watch = watchFile;
