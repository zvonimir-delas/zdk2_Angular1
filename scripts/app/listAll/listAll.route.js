angular.module('myApp').config(function($stateProvider){
    $stateProvider
    .state('listAll',{
        url: '/list-all',
        controller: 'listAllController',
        template: `
            <button ui-sref="add">Add new student</button>
            <div ng-repeat = "student in allStudents">
            {{student.name}} <button ui-sref="details({studentId: student.id, studentName: student.name})">Details</button>
            <button ng-click="deleteStudent(student)">Delete</button></div>
        `
    })
})