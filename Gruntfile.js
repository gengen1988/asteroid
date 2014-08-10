module.exports = function (grunt) {
  grunt.initConfig({
    requirejs: {
      dist: {
        options: {
          mainConfigFile: 'www/config.js',
          name: 'js/main',
          out: 'dist/out.js',
          paths: grunt.file.readJSON('path.json')
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
};