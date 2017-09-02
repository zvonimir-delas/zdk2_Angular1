angular.module('myApp').controller('addController', function($scope, $stateParams, localStorageService){


    $scope.addNewStudent = function(){
        allStudents = localStorageService.get('students');
        allStudents.push({name: $scope.name, lastName: $scope.lastName, grade: $scope.grade, id: allStudents.length});
        localStorageService.set('students', allStudents);

        $scope.name = null;
        $scope.lastName = null;
        $scope.grade = null;
    }
})