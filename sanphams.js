window.SanPhamController = function ($scope, $http, $location) {
  $scope.listSanpham = [];
  $http.get("http://localhost:3000/sanphams").then(
    function (response) {
      $scope.listSanpham = response.data;
    },
    function (error) {
      console.log("Error: " + error);
    }
  );
  $scope.onSubmit = function () {
    $http.post("http://localhost:3000/sanphams", {
      id: $scope.id,
      image: $scope.image,
      name: $scope.name,
      mota: $scope.mota,
      giaban: $scope.giaban
    }).then(function (response){
      if(response.status === 201){
        alert("Thêm sản phẩm thành công");
        $location.path("/CRUD");
      }
    },
    function (error) {
      console.log("Error: " + error);
    });
  };
  $scope.detail = function(id){
    $http.get("http://localhost:3000/sanphams/" + id).then(
      function (response){
        console.log(response);
        if(response.statusText === "OK"){
          $scope.id = response.data.id;
          $scope.image = response.data.image;
          $scope.name = response.data.name;
          $scope.mota = response.data.mota;
          $scope.giaban = response.data.giaban;
          $location.path("/CRUD");
        }
      },
      function (error) {
        console.log("Error: " + error);
      }
    );
  };
  $scope.updateSanPham = function(){
    $http.put("http://localhost:3000/sanphams/" + $scope.id,{
      id: $scope.id,
      image: $scope.image,
      name: $scope.name,
      mota: $scope.mota,
      giaban: $scope.giaban
    }).then(function(response){
      if(response.status === 200){
        alert("Cập nhật sản phẩm thành công");
        $location.path("/CRUD");
      }
    },
      function(error){
        console.log("Error: " + error);
      }
    );
  };
  $scope.deleteSP = function(id){
    $http.delete("http://localhost:3000/sanphams/" + id).then(
      function(response){
        if(response.status === 200){
          alert("Xóa sản phẩm thành công");
        }
      },
      function(error){
        console.log("Error: " + error);
      }
    );
  };
}