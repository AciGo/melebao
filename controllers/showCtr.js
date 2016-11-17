/**
 * Created by Administrator on 2016/11/17.
 */
myApp
    .constant("activeClass","active") //定义一个常量
    .controller("showCtr",function($scope,activeClass){
        // 声明一个变量，保存当前用户选中的班级类别
        $scope.selectedType = null;

        // 用户单击班级类别的响应函数
        $scope.selectType = function (type) {
            // 存储当前选中的班级类别
            $scope.selectedType = type;
        };

        // 过滤函数
        $scope.showByType = function(cl) {
            // 要么用户选择的是“全部”，显示所有班级
            // 要么用户选择某个类别，属于该类别的class才显示
            return $scope.selectedType == null || $scope.selectedType == cl.type;
        };

        // 返回高亮颜色类
        $scope.getActiveClass = function (type) {
            return type == $scope.selectedType ? activeClass : "";
        };
    });