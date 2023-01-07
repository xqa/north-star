/******************************
脚本功能：堆糖-爱豆壁纸美图社区+解锁VIP
软件版本：8.12.0
更新时间：2022-10-7
*******************************
[rewrite_local]
^https:\/\/api\.duitang\.com\/napi url script-response-body https://raw.githubusercontent.com/xqa/north-star/main/Crack/duitang.js
[mitm] 
hostname = api.duitang.com
*******************************/
let body = JSON.parse($response.body);
body["vip"] = true;
body["is_life_artist"] = true;
body["isnew"] = true;
body["short_video"] = true;
body["vip_end_at_mills"] = 9999999999999;
body["vip_level"] = 9;
body["is_certify_user"] = true;
body["be_follow_count"] = 9999999999999;
body["follow_count"] = 9999999999999;
body["score"] = 9999999999999;
body["username"] = "这个人好帅";
$done({ body: JSON.stringify(body) });