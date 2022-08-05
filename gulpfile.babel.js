import gulp from "gulp";
import yargs from "yargs";
const sass = require("gulp-sass")(require("sass"));
import cleanCSS from "gulp-clean-css";
import gulpif from "gulp-if";
import sourcemaps from "gulp-sourcemaps";
import imagemin from "gulp-imagemin";
import del from "del";
const webpack = require("webpack-stream");
import uglify from "gulp-uglify";
import named from "vinyl-named";

//import { use } from "browser-sync";

const PRODUCTION = yargs.argv.prod;

// PAth define

const paths = {
  styles: {
    src: ["src/assets/scss/bundle.scss", "src/assets/scss/admin.scss"],
    dest: "dist/assets/css",
  },
  images: {
    src: "src/assets/images/**/*.{jpg,jpeg,png,gif,svg}",
    dest: "dist/assets/images",
  },
  scripts: {
    src: ["src/assets/js/bundle.js", "src/assets/js/admin.js"],
    dest: "dist/assets/js",
  },
  other: {
    src: ["src/assets/**/*", "!src/assets/{scss,js,images},!src/assets/{scss,js,images}/**/*"],
    dest: "dist/assets",
  },
};

// Clean dist folder
export const clean = () => {
  return del(["dist"]);
};

export const styles = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpif(PRODUCTION, cleanCSS({ compatibility: "ie9" })))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(paths.styles.dest));
};

// Images minify

export const images = () => {
  return gulp.src(paths.images.src).pipe(gulpif(PRODUCTION, imagemin())).pipe(gulp.dest(paths.images.dest));
};

// Other files
export const watch = () => {
  gulp.watch("src/assets/scss/**/*.scss", styles);
  gulp.watch("src/assets/js/**/*.scss", scripts);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.other.src, copy);
};

// Copy all other files to dist directly

export const copy = () => {
  return gulp.src(paths.other.src).pipe(gulp.dest(paths.other.dest));
};

// Webpack

export const scripts = () => {
  return gulp
    .src(paths.scripts.src)
    .pipe(named())
    .pipe(
      webpack({
        module: {
          rules: [
            {
              test: /\.js$/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env"],
                },
              },
            },
          ],
        },
        output: {
          filename: "[name].js",
        },
        externals: {
          jquery: "jQuery",
        },
        devtool: !PRODUCTION ? "inline-source-map" : false,
        mode: PRODUCTION ? "production" : "development",
      })
    )
    .pipe(gulpif(PRODUCTION, uglify()))
    .pipe(gulp.dest(paths.scripts.dest));
};

export const dev = gulp.series(clean, gulp.parallel(styles, scripts, images, copy), watch);
export const build = gulp.series(clean, gulp.parallel(styles, scripts, images, copy));

// Default task
export default dev;

