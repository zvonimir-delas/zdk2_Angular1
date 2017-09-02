angular.module('myApp').config(function($stateProvider){
    
        $stateProvider
        .state('details',{
            //studentName included to make sense to the user
            url: '/details/:studentId/:studentName',
            controller: 'detailsController',
            template: `
                <h1>Details<h2>
                <h3>{{studentName}} {{studentLastName}},Grade:{{studentGrade}}</h3>
                <h4>Unique student id: {{studentId}}<h4>
                <br>
                <button ui-sref="listAll">Back</button>           
                `,
            params:{
                studentId: null,
                studentName: null,
                studentLastName: null,
                studentGrade: 0
            }
        })
    })