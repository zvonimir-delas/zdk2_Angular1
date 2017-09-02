angular.module('myApp').controller('addController', function($scope, $stateParams, localStorageService){
    
    $scope.allStudents = localStorageService.get('studentsZD_App2');
    
    $scope.addNewStudent = function(){
        $scope.allStudents.push({name: $scope.name, lastName: $scope.lastName, grade: $scope.grade, id: $scope.getUniqueId()});
        localStorageService.set('studentsZD_App2', $scope.allStudents);

        $scope.name = null;
        $scope.lastName = null;
        $scope.grade = null;
    }

    $scope.getUniqueId = function(){
        var biggestId = 0;

        $scope.allStudents.forEach(function(student) {
            
            if(biggestId < student.id)
                biggestId = student.id;

        }, this);
;
        return (biggestId+1);
    }
})