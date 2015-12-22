System.config({
  paths: {
    'vendor/*': 'bower_components/*',
  },
  map: {
    angular: 'vendor/angular/angular.js',
  },
  meta: {
    'angular': {
      build: false,
      format: 'global',
      exports: 'angular',
    },
  },
  bundles: {
    'bundle.js': ['app/hello.js', 'app/main.js', 'boot.js'],
  },
//   defaultJSExtensions: true,
});
