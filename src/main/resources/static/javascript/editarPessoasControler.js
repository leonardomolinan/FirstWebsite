var editarPessoasControllerApp = angular.module("editarPessoasControllerApp", []);

editarPessoasControllerApp.controller("editarPessoasController", function($scope, $http, $window){

    $scope.id = null;
    $scope.name = null;
    $scope.login = null;
    $scope.password = null;

    $scope.editarPessoas = function(){

        var pessoasModel = new Object();

        pessoasModel.id = $scope.id;
        pessoasModel.name = $scope.name;
        pessoasModel.login = $scope.login;
        pessoasModel.password = $scope.password;

        var resultadoModel = $http.post("../editarPessoas", pessoasModel);

        resultadoModel.success(function(data, status, headers, config){

            if(data == 1){
                $window.alert(data.mensagem);
                $window.location.href = "../consultarPessoas.html";
            }else{
                $window.alert(data.mensagem);
            }
        });
        resultadoModel.error(function(data, status, headers, config){

            $window.alert(data);
        });
    }
});