angular.module('myApp').controller('detailsController', function($scope, $stateParams, localStorageService){
    $scope.allStudents = localStorageService.get('studentsZD_App2');

    var studentRequested = null;

    $scope.allStudents.forEach(function(student) {

        //typeof($stateParams.studentId) is string, therefore, '==' operator is used
        if(student.id == $stateParams.studentId)
            studentRequested = student;

    }, this);

    $scope.studentName = studentRequested.name;
    $scope.studentLastName = studentRequested.lastName;
    $scope.studentId = studentRequested.id;
    $scope.studentGrade = studentRequested.grade;
    
})