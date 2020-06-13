const { src, dest, watch, parallel, series } = require("gulp");

const pug = require("gulp-pug");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const sync = require("browser-sync").create();

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
    .pipe(dest("public/stylesheets"))
    .pipe(sync.stream());
  cb();
}

function watchFile(cb) {
  watch("./src_view/**.pug", html_gen);
  watch("./src_view/sass/**.scss", gen_css);
}

function browserSync(cd) {
  sync.init({
    server: {
      baseDir: "./public",
    },
  });
  watch("./src_view/**/*.pug", html_gen);
  watch("./src_view/sass/**.scss", gen_css);
  watch("./public/**/*.html").on("change", sync.reload);
}

// exports.css = gen_css;
// exports.html = html_gen;
// exports.watch = watchFile;

exports.sync = browserSync;

exports.default = series(parallel(html_gen, gen_css));
