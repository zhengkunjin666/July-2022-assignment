const { src, dest, parallel, watch } = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-csso');
const babel = require("gulp-babel");
const uglify=require('gulp-uglify');

function css() {
  return src('src/less/*.less')
    .pipe(less())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(minifyCSS())
    .pipe(dest('./../public/stylesheets'))
}

function js() {
  return src('src/js/*.js', { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest('./../public/javascripts', { sourcemaps: true }))
}

function watchAll() {
  return watch('src/**', parallel(css, js));
}

exports.js = js;
exports.css = css;
exports.default = watchAll;