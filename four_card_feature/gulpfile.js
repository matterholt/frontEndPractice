const { src, dest, watch, parallel, series } = require("gulp");
const sass = require("gulp-sass");
const sync = require("browser-sync").create();

function styleit() {
  return (
    src("./scss/**/*.scss")
      //
      .pipe(sass())
      //
      .pipe(dest("./style/"))

      .pipe(sync.stream())
  );
}

function watchIt() {
  sync.init({
    server: {
      base: "./",
    },
  });
  watch("./scss/**/*.scss", styleit);
  watch("./*.html").on("change", sync.reload);
  watch(".js/**/*.js").on("change", sync.reload);
}
exports.style = styleit;
exports.watchIt = watchIt;
