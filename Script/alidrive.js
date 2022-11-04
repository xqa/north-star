/*
应用名称：阿里云盘
更新时间：2022-10-16
脚本功能：优化首页display
*/

let obj = JSON.parse($response.body);
if (obj.result) {
    obj.result = Object.values(obj.result).filter(item => (item["appCode"]=="file" || item["appCode"]=="video"));
}
$done({ body: JSON.stringify(obj) });
