var app = angular.module('myApp', ['LocalStorageModule', 'ui.router']);

app.run(function(localStorageService){
    if(!localStorageService.get('studentsZD_App2'))
        localStorageService.set('studentsZD_App2', [{id: 0, name: 'Marko', lastName: 'Marković', grade: 3}, {id: 1, name: 'Jelena', lastName: 'Jelenić', grade: 5}]);  
});
localStorage.clear();