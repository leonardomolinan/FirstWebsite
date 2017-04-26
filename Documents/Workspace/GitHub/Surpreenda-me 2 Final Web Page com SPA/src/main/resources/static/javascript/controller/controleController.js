myApp.controller('controleController', function($scope, $location, $http){

    $scope.users = [];
    $scope.id = null;
    $scope.nome = null;
    $scope.login = null;
    $scope.senha = null;

    $scope.init = function() {
        $http({
            method: 'get',
            url: 'http://localhost:8080/pessoas'
        }).then(function(res) {
            $scope.users = res.data;
            console.log($scope.users);
        });
    }

        $scope.excluir = function(user){
               $http.post("excluir", user)
               .then(function() {
                    $scope.pop();
               }).catch(function() {
                    $scope.pop2();
               })
        }

        $scope.preenche = function(user) {
                $scope.id = user.id;
                $scope.nome = user.nome;
                $scope.sobrenome = user.sobrenome;
                $scope.email = user.email;
                $scope.password = user.password;
        }

        $scope.save = function(){

                        var user = new Object();
                        user.id = $scope.id;
                        user.nome = $scope.nome;
                        user.sobrenome = $scope.sobrenome;
                        user.email = $scope.email;
                        user.password = $scope.password;

                        $http.post("save", user)
                        .then(function() {
                            $scope.pop();
                        }).catch(function() {
                            $scope.pop2();
                        })

                        $scope.id = null;
                        $scope.nome = null;
                        $scope.sobrenome = null;
                        $scope.email = null;
                        $scope.password = null;
                };

});
