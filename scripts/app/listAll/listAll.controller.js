angular.module('myApp').controller('listAllController', function($scope, $stateParams, localStorageService){
    $scope.allStudents = localStorageService.get('students');
    
    $scope.deleteStudent = function(studentToDelete){
        
        $scope.allStudents.forEach(function(student) {
            if(student === studentToDelete)
                $scope.allStudents.splice($scope.allStudents.indexOf(student));
        }, this);

        localStorageService.set('students', $scope.allStudents);
    }
})