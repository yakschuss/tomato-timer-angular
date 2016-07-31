(function () {
  function Timer($interval) {

    var Timer = {};

    Timer.time = 25 * 60;
    Timer.btnTxt = "Start";
    Timer.completedSessions = 0;


    Timer.start = function() {

      Timer.isRunning = true;
      Timer.btnTxt = "Reset";

      Timer.timer = $interval(function (){
        Timer.time -= 1;

        if(Timer.time == -1 && Timer.completedSessions == 3) {
          $interval.cancel(Timer.timer);
          Timer.isRunning = false;
          Timer.time = 5 * 60;
          Timer.completedSessions = 0;
          Timer.onBreak = true;
          Timer.btnTxt = "Take A Break";
          myDing.play();
        }

        else if(Timer.time == -1) {
          $interval.cancel(Timer.timer);
          Timer.isRunning = false;
          Timer.time = 25 * 60;
          Timer.completedSessions += 1;
          Timer.btnTxt = "Next Session";
          myDing.play();
        }


      }.bind(this), 1000);
    }




    Timer.reset = function() {
      if (angular.isDefined(Timer.timer)) {
        $interval.cancel(Timer.timer);
        Timer.isRunning = false;
        Timer.time = 25 * 60;
        Timer.btnTxt = "Start Working";

      }
    }

    Timer.break = function() {
      Timer.isRunning = true;

      Timer.onBreak = false;
      Timer.breakMsg = "Start Break"

      Timer.btnTxt = "Reset Timer";

      Timer.timer = $interval(function () {

        Timer.time -= 1;
        if(Timer.time == -1) {
          $interval.cancel(Timer.timer);
          myDing.play();
          Timer.isRunning = false;
          Timer.btnTxt = "Nice Work! Start Again!"
          Timer.time = 25 * 60;
        }
      }.bind(this), 1000);
    }

    var myDing = new buzz.sound( "/assets/sounds/airhorn.mp3", {
      preload: true
    });


    return Timer

  }

  angular
    .module('tomatoTimer')
    .factory('Timer', ['$interval', Timer ]);


})();
