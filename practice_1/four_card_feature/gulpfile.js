const { src, dest, watch, parallel, series } = require("gulp");
const sass = require("gulp-sass");
const sync = require("browser-sync").create();
const pug = require("gulp-pug");
const rename = require("gulp-rename");

const fileStruct = {
  pugFiles: "src/*.pug",
  scssFiles: "./src/style/**/*.scss",
  buildcss: "./build/style/",
  buildHtml: "./build/",
};

function styleit() {
  return src(fileStruct.scssFiles)
    .pipe(sass())
    .pipe(dest("./build/style/"))
    .pipe(sync.stream());
}

function buildHtml() {
  return src(fileStruct.buildHtml)
    .pipe(rename({ extname: ".html" }))
    .pipe(pug({ pretty: true }))
    .pipe(dest(fileStruct.buildHtml))
    .pipe(sync.stream());
}

function watchIt() {
  sync.init({
    server: {
      base: "./biuld",
    },
  });
  watch(fileStruct.pugFiles, buildHtml);
  watch("./scss/**/*.scss", styleit);
  watch("./*.html").on("change", sync.reload);
  watch(".js/**/*.js").on("change", sync.reload);
}
exports.style = styleit;
exports.pug = buildHtml;
exports.watchIt = watchIt;
