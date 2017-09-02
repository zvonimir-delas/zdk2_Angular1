angular.module('myApp').config(function($stateProvider){
    
        $stateProvider
        .state('details',{
            //this URL allows the user to get to a student with only his ID
            url: '/details/:studentId/',
            //studentName included to make sense to the user, this URL 
            //shows if the user navigates from the listAll state
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