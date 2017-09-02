angular.module('myApp').config(function($stateProvider){
    
        $stateProvider
        .state('add',{
            url: '/add',
            controller: 'addController',
            template: `
                <div>Name</div>
                <input type="text" ng-model="name"></input>
                <div>Last Name</div>
                <input type="text" ng-model="lastName"></input>
                <div>Grade</div>
                <input type="radio" ng-model="grade" value="1">1 <input type="radio" ng-model="grade" value="2">2 <input type="radio" ng-model="grade" value="3">3 <input type="radio" ng-model="grade" value="4">4 <input type="radio" ng-model="grade" value="5">5<br>
                <button ng-click="addNewStudent()">Add</button>
                <br><br>
                <button ui-sref="listAll">Back</button>
                `
        })
    })