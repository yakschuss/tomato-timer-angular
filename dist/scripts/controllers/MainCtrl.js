(function () {
  function MainCtrl($scope, Timer) {

    this.timer = Timer;
    $scope.timer = Timer;

 }


  angular
    .module('tomatoTimer')
    .controller('MainCtrl', [ '$scope', 'Timer', MainCtrl ]);

})();
