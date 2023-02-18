window.SanPhamDetailController = function($scope, $http, $routeParams){
    var id = $routeParams.id;
    console.log(id);
    $http.get("http://localhost:3000/sanphams/" + id).then(
        function(response){
            if(response.statusText === "OK"){
                $scope.id = response.data.id;
                $scope.image = response.data.image;
                $scope.image1 = response.data.image1;
                $scope.image2 = response.data.image2;
                $scope.image3 = response.data.image3;
                $scope.name = response.data.name;
                $scope.mota = response.data.mota;
                $scope.giaban = response.data.giaban;
            }
        },
        function(error){
            console.log(error);
        }
    );
};