(function () {
  function MainCtrl(Timer) {
    this.timer = Timer;
  }

  angular
    .module('tomatoTimer')
    .controller('MainCtrl', ['Timer', MainCtrl ]);
  
})();
