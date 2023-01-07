/******************************
脚本：钱迹解锁VIP
版本：7.36.0
时间：2022-10-5
*******************************
[rewrite_local]
^https:\/\/qianji\.xxoojoke\.com\/vip\/configios url script-response-body https://raw.githubusercontent.com/xqa/north-star/main/Crack/qj.js
[mitm] 
hostname = qianji.xxoojoke.com
*******************************/

let body = JSON.parse($response.body);
body["vipend"] = 2365847580;
body["viptype"] = 100;
body["vipstart"] = 1365847580;
body["name"] = "这个人好帅";
$done({ body: JSON.stringify(body) });