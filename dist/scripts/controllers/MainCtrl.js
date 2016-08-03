(function () {
  function MainCtrl($scope, $firebaseArray, Timer) {

    this.timer = Timer;
    $scope.timer = Timer;

    var ref = firebase.database().ref().child("tasks");
    $scope.tasks = $firebaseArray(ref);


    $scope.addTask = function() {
      $scope.tasks.$add({
        text: $scope.newTaskText
      });
    };


  }


  angular
    .module('tomatoTimer')
    .controller('MainCtrl', [ '$scope', '$firebaseArray', 'Timer', MainCtrl ]);

})();
