/**
 * Created by naresh on 19/11/15.
 */

angular.module('sampleProjectApp')
  .controller('SummaryCtrl', function ($scope,$log,$exceptionHandler,summary) {
    try{
      $scope.labels = ["completed", "pending","failed"];
      $scope.projectProgress = [];
    //  var a = summary.rrr.asss.aa;
      if(summary.data.status == 0){
        $scope.projectProgress = summary.data.data;
      }
      $scope.getaccodrdianclass = function(type){
        if (type === 0){
          return "summary summary-pending";
        }else if(type === 1){
          return "summary summary-running";
        }else if(type === 2){
          return "summary summary-passed";
        }else if(type === 3){
          return "summary summary-failed";
        }
      }
      $scope.returnProgressType = function(type) {
        if (type === 0){
          return 'warning';
        }else if(type === 1){
          return 'info';
        }else if(type === 2){
          return 'success';
        }else if(type === 3){
          return 'danger';
        }
      };
    }
    catch(e){
     console.log($exceptionHandler(e,"Summary controller"));
    }


  });

