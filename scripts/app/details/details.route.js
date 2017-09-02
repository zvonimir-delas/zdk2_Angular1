angular.module('myApp').config(function($stateProvider){
    
        $stateProvider
        .state('details',{
            url: '/details/:studentId/:studentName',
            controller: 'detailsController',
            template: `
                <h1>Details<h2>
                <h3>{{studentName}} {{studentLastName}},Grade:{{studentGrade}}</h3>
                <br><br>
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