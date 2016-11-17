/**
 * Created by Administrator on 2016/11/17.
 */
myApp
    .constant("activeClass","active") //定义一个常量
    .controller("newsCtr",function($scope,activeClass){
        // 声明一个变量，保存当前用户选中的商品类别
        $scope.selectedCategory = null;

        // 过滤函数
        $scope.showByCategory = function (product) {
            // 显示所有新闻
            return $scope.selectedCategory == null;
        };

        // 定义用于分页的变量
        $scope.currentPage = 1;
        $scope.pageSize = 10;

        // 分页按钮单机响应事件,参数为当前要求显示的码数
        $scope.selectPage= function (page) {
            $scope.currentPage = page;// 将当前页面转换为传过来的要显示的页面
        };

        // 高亮显示-获取active class 参数为代码页数
        $scope.activePageClass= function (page) {
            return $scope.currentPage == page ? activeClass:"";
        }
    });