var cadastrarControllerApp = angular.module("cadastrarControllerApp", []);

cadastrarControllerApp.controller("cadastrarController", function($scope,
     $window, $http){

    $scope.name = null;
    $scope.login = null;
    $scope.senha = null;

    $scope.salvarPessoas = function(){

        var pessoasModel = new Object();
        pessoasModel.name = $scope.name;
        pessoasModel.login = $scope.login;
        pessoasModel.senha = $scope.senha;

        console.log(pessoasModel);

        var resultadoModel = $http.post("salvarPessoas", pessoasModel);
        resultadoModel.success(function(data, status, headers, config){

            if(data.codigo == 1){
                $window.alert(data.mensagem);

                $scope.name = null;
                $scope.login = null;
                $scope.senha = null;

            }else{
                $window.alert(data.mensagem);
            }
        });
        resultadoModel.error(function(data, status, headers, config){

            $window.alert(data.mensagem);
        });

    };
});