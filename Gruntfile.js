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

    watch: {
      config: {
        files: 'Gruntfile.js',
        tasks: ['default'],
        options: {
          reload: true,
        },
      },
      app: {
        files: ['app/**/*', 'boot.js'],
        tasks: 'default',
      },
    },

  });

  grunt.loadNpmTasks("grunt-systemjs-builder");
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
      'systemjs:bundle',
  ]);
};
