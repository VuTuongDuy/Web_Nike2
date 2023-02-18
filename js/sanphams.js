window.SanPhamController = function ($scope, $http){
    $scope.ListSanPham = [];
    $http.get("http://localhost:3000/sanpham").then(
        function(response){
            $scope.ListSanPham = response.data;
        },
        function (error) {
            console.log("Error: " + error);
        }
    );
}