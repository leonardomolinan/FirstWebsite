myApp.controller('LoginController', function($scope, $location, $window, $http, toaster){


$scope.info = ['',''];
$scope.login = function() {
        $http.post("/login", $scope.info)
        .then(function(){
                        toaster.pop('success', "Sucesso!", "Seu cadastro foi realizado com sucesso!");
                        var landingUrl = "http://localhost:8080/controle"
                        $window.location.href = landingUrl;
                    }).catch(function(){
                        toaster.pop('error', "Erro!", "Ops! Ocorreu um erro ao realizar seu cadastro :(");
                    })
    };
});