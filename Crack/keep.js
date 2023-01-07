/******************************
脚本：Keep 解锁VIP
版本：7.36.0
时间：2022-10-22
*******************************
[rewrite_local]
^https:\/\/api\.gotokeep\.com url script-response-body https://raw.githubusercontent.com/xqa/north-star/main/Crack/keep.js
[mitm] 
hostname = api.gotokeep.com
*******************************/
let body = JSON.parse($response.body);
body["memberStatus"] = 1;
body["username"] = "这个人好帅";
body["buttonText"] = "已永久";
body["hasPaid"] = true;
body["downLoadAll"] = true;
body["videoTime"] = 3000;
body["startEnable"] = true;
body["memberStatus"] = 1;
body["preview"] = true;
body["errorCode"] = 0;
body["status"] = true;
$done({ body: JSON.stringify(body) });