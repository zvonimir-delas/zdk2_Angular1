angular.module('myApp').controller('listAllController', function($scope, $stateParams, localStorageService){
    $scope.allStudents = localStorageService.get('studentsZD_App2');
    
    $scope.deleteStudent = function(studentToDelete){
        
        $scope.allStudents.forEach(function(student) {
            if(student === studentToDelete)
                $scope.allStudents.splice($scope.allStudents.indexOf(student));
        }, this);

        localStorageService.set('studentsZD_App2', $scope.allStudents);
    }
})