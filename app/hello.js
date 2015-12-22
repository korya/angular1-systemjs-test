// import app from './main';
// import './html/hello.html!';
// import 'less/hello.less!';

window.console.log('hello is loaded');
export let hello = function () {
  window.console.log('hello directive is loaded');
  return {
    templateUrl: 'app/html/hello.html',
    link: ($scope) => {
      window.console.log('hello directive is linked');
      $scope.message = 'Hello, pal!';
    },
  };
};
