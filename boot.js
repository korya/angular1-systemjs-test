import angular from 'angular';
import 'app/main.js';

window.console.log('boot is loaded', window.document);
angular.element(document).ready(function() {  
  window.console.log('bootstrapping angular', document);
  angular.bootstrap(document, ['mainApp']);
});
