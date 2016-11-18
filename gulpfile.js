var gulp = require('gulp')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var ngAnnotate = require('gulp-ng-annotate')
var uglify = require('gulp-uglify');

var SrcJS = ['Development/components/**/*.js', '!Development/components/mainapp.min.js']


gulp.task('DevelopmentApp', function(){

    return gulp.src(['Development/components/**/*.js', '!Development/components/mainapp.min.js'])
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename('mainapp.min.js'))
        .pipe(gulp.dest('Development/components/'));


})




gulp.task('Vendor', function(){
    return gulp.src(['Development/lib/angular/angular.js' ,
        'Development/lib/angular-resource/angular-resource.js',
        'Development/lib/angular-ui-router/release/angular-ui-router.js',
        'Development/lib/ngStorage/ngStorage.js' ,
        'Development/lib/jquery/dist/jquery.js' ,
        'Development/lib/angular-animate/angular-animate.js',
        'Development/lib/angular-strap/dist/angular-strap.js',
        'Development/lib/angular-strap/dist/angular-strap.tpl.js',
        'Development/lib/elasticsearch/elasticsearch.angular.js',
        'Development/lib/angular-filter/dist/angular-filter.js'

    ])
        .pipe(concat('vendor5.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename('vendor5.min.js'))
        .pipe(gulp.dest('Development/'));

})



gulp.task('watch', function(){

    gulp.watch(SrcJS, ['DevelopmentApp-watch'])

})


gulp.task('DevelopmentApp-watch', ['DevelopmentApp'])


gulp.task('default' , ['watch'])