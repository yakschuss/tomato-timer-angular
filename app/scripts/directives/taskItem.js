(function () {

  function taskItem($document){


    return {
      restrict: 'A',
      link: function(scope, element) {
        element.bind('click', function(e) {
          angular.element(e.target).siblings(e.id + " item").addClass('done-through');
        });
      }
    };
  };



  angular
    .module('tomatoTimer')
    .directive('taskItem', ['$document', taskItem]);



})();
