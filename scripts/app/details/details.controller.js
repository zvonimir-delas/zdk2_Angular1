angular.module('myApp').controller('detailsController', function($scope, $stateParams){
    $scope.studentName = $stateParams.studentName;
    $scope.studentLastName = $stateParams.studentLastName;
    $scope.studentId = $stateParams.studentId;
    $scope.studentGrade = $stateParams.studentGrade
    
})