﻿/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var clean = require('gulp-clean');

var destPath = './wwwroot/libs/';

// Delete the dist directory
gulp.task('clean', function () {
	return gulp.src(destPath)
		.pipe(clean());
});

gulp.task("scriptsNStyles", () => {
	gulp.src([
			'core-js/client/**',
			'systemjs/dist/system.src.js',
			'reflect-metadata/**',
			'rxjs/**',
			'zone.js/dist/**',
			'@angular/**',
			'jquery/dist/jquery.*js',
			'bootstrap/dist/js/bootstrap.*js'
	], {
		cwd: "node_modules/**"
	})
		.pipe(gulp.dest("./wwwroot/libs"));
});