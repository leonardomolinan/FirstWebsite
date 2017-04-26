myApp.controller('cadastroController', function($scope, $location, $window, $http, toaster){

$scope.save = function(){

            var user = new Object();
            user.nome = $scope.nome;
            user.sobrenome = $scope.sobrenome;
            user.email = $scope.email;
            user.password = $scope.password;

            $http.post("save", user)
            .then(function() {
                toaster.pop('success', "Sucesso!", "Seu cadastro foi realizado com sucesso!");
            }).catch(function() {
                toaster.pop('error', "Erro!", "Ops! Ocorreu um erro ao realizar seu cadastro :(");
            })

            $scope.nome = null;
            $scope.sobrenome = null;
            $scope.email = null;
            $scope.password = null;
};


});