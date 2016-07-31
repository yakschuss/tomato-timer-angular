(function () {
  function MainCtrl($scope, Timer) {

    this.timer = Timer;
    $scope.timer = Timer;

    var myDing = new buzz.sound( "/assets/sounds/ding.mp3", {
      preload: true
    });

    $scope.$watch('timer.time', function(newVal, o) {
      if(newVal == 0) {
        myDing.play();
      }
    });
  }


  angular
    .module('tomatoTimer')
    .controller('MainCtrl', [ '$scope', 'Timer', MainCtrl ]);

})();
