const os = require("os");
const fs = require("fs");
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const header = require("gulp-header");
const sass = require("gulp-sass");
const watch = require("gulp-watch");
const autoPrefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const webpack = require("webpack-stream");
const zip = require("gulp-zip");
const home = os.homedir();

// const ui_static = /^win/.test(process.platform) ? `//ui-static/wwwroot/review_flower2` : `/Volumes/wwwroot/review_flower2`;

const autoprefixer_browsers = ["last 4 version", "not IE 8"];


var category = '/';
var folder ='slider-test';

//경로 설정
const Path = {
    local: `${__dirname}`,
    
    local_src_sass: `${__dirname}${category}/${folder}/src/sass`,
    local_src_js: `${__dirname}${category}/${folder}/src/js`,
    local_src_img: `${__dirname}${category}/${folder}/src/images`,
    local_src_html: `${__dirname}${category}/${folder}/src/html`,
    
    local_dist_css: `${__dirname}${category}/${folder}/dist/css`,
    local_dist_js: `${__dirname}${category}/${folder}/dist/js`,
    local_dist_img: `${__dirname}${category}/${folder}/dist/images`,
    
};


let compileJs = () => {
    gulp.src(`${Path.local_src_js}/**/*.js`)
    //    .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest(Path.local_dist_js));
};

let compileSass = () => {
    console.log(Path.local);
    gulp.src(`${Path.local_src_sass}/**/*.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: "compact"}).on("error", sass.logError))
        .pipe(autoPrefixer(autoprefixer_browsers))
        .pipe(sourcemaps.write(`.`))
        .pipe(gulp.dest(Path.local_dist_css));
        // .pipe(gulp.dest(Path.ui_static_css));
};

let minifyImg = (e) => {
    let filePath = e && e.history[0];
    let event = e && e.event;
    
    filePath = filePath || `${Path.local_src_img}/**/*+(.png|.jpg|.gif)`;
    
    if(event === "unlink"){
        let fileName = filePath.split("/").pop();
        fs.unlinkSync(`${Path.local_dist_img}/${fileName}`);
        // fs.unlinkSync(`${Path.ui_static_img}/${fileName}`);
        
        return;
    }
    
    gulp.src([filePath])
        .pipe(imagemin([
                imagemin.gifsicle({interlaced: true}),
                imagemin.jpegtran({progressive: true}),
                imagemin.optipng({optimizationLevel: 5})
            ])
        )
        .pipe(gulp.dest(Path.local_dist_img))
        // .pipe(gulp.dest(Path.ui_static_img));
};

gulp.task("dev", () => {
    compileJs();
    compileSass();
    
    watch(`${Path.local_src_js}/**/*.js`, compileJs);
    watch(`${Path.local_src_sass}/**/*.scss`, compileSass);
    
    watch(`${Path.local}/src/**/*`, (e) => {
        console.log(`${e.event}: ${e.path.split("/").pop()}`);
    });
});

gulp.task("minifyImg", () => {
    minifyImg();
});
