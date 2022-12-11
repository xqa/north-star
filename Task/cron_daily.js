/*
README：https://github.com/yichahucha/surge/tree/master
每日蚂蚁收能量提醒（corn "11 7 * * *" 每天7:11）+ 每日壹句（有道词典）+ 点击通知跳转支付宝蚂蚁森林页面
*/
$notify("每日蚂蚁收能量提醒", "", "收能量啦👉alipay://platformapi/startapp?appId=60000002", {"open-url" : "alipay://platformapi/startapp?appId=60000002"});
$done();