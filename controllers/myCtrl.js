/**
 * Created by Administrator on 2016/11/17.
 */
myApp
    .constant("newsUrl","json/news.json") //定义URL常量
    .constant("classUrl","json/class.json") //定义URL常量
    .constant("typeUrl","json/type.json") //定义URL常量
    .controller("myCtr",function($scope,$http,newsUrl,classUrl,typeUrl){ //创建主控制器
        $scope.data = {}; //模拟数据

        //http请求服务器端数据
        $http.get(newsUrl).success(function(data){
            $scope.data.news = data;
        });

        $http.get(classUrl).success(function(data){
            $scope.data.classs = data;
        });

        $http.get(typeUrl).success(function(data){
            $scope.data.types = data;
        });
    });