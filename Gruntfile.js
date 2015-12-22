module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    systemjs: {
      options: {
        configFile: "./app/config.js",
//         minify: true,
//         build: {
//           mangle: false
//         },
      },
      bundle: {
        src: 'boot.js',
        dest: 'bundle.js',
      },
    },

  });

  grunt.loadNpmTasks("grunt-systemjs-builder");

  grunt.registerTask('default', [
      'systemjs:bundle',
  ]);
};
