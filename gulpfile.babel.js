import gulp from "gulp";
import yargs from "yargs";
const sass = require("gulp-sass")(require("sass"));
import cleanCSS from "gulp-clean-css";
import gulpif from "gulp-if";
import sourcemaps from "gulp-sourcemaps";

const PRODUCTION = yargs.argv.prod;

// PAth define

const paths = {
  styles: {
    src: ["src/assets/scss/bundle.scss", "src/assets/scss/admin.scss"],
    dest: "dist/assets/css",
  },
};

export const styles = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpif(PRODUCTION, cleanCSS({ compatibility: "ie9" })))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(paths.styles.src));
};



export const watch = () => {
  gulp.watch("src/assets/scss/**/*.scss", styles);
};
