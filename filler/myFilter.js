/**
 * Created by Administrator on 2016/11/17.
 */
// 声明另一个模块，专门管理各种过滤器
var myFilter = angular.module("myFilter",[]);

myFilter.filter("range",function(){ // 自定义分页过滤器
        /*
         参数：news - 要被过滤的新闻数组
         currentPage - 要显示的页码
         pageSize - 页面大小
         */
        return function (news, currentPage, pageSize) {
            // 对传入的参数进行有效验证
            if(angular.isArray(news) && angular.isNumber(currentPage) && angular.isNumber(pageSize)){
                // 计算当前页面显示新闻的起始索引值
                var startIndex = (currentPage - 1) * pageSize;
                // 如果起始索引超过了新闻数量，则返回空数组
                if(startIndex > news.length - 1){
                    return[];
                }else {
                    // 截取一页的新闻信息返回
                    return news.splice(startIndex, pageSize);
                }
            }
            else {
                // 如果传入的参数有误，则不对原数据做任何处理
                return news;
            }
        }
    });

myFilter.filter("pageCount",function(){ // 自定义计算分页导航按钮的过滤器 => 起到转换的作用
        // 参数1：新闻数组;  参数2：页面大小;
        return function (news, pageSize) {
            if(angular.isArray(news) && angular.isNumber(pageSize)){
                // 计算导航按钮数组的大小
                var pages=Math.ceil(news.length / pageSize);

                //生成一个新的数组[1,2,3]
                var result=[];
                for(var i=0;i<pages;i++){
                    result.push(i + 1);
                }
                return result;
            }else {
                return news;
            }
        }
    });