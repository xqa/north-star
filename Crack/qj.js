/******************************
脚本：钱迹解锁VIP
软件版本：3.0.6
时间：2022-10-5
*******************************
[rewrite_local]
^https:\/\/qianji\.xxoojoke\.com\/vip\/configios url script-response-body https://raw.githubusercontent.com/xqa/north-star/main/Crack/qj.js
[mitm] 
hostname = qianji.xxoojoke.com
*******************************/

let body = JSON.parse($response.body);
body.data.config.userinfo = {
  ...body.data.config.userinfo,
  vipend: 2365847580,
  viptype: 100,
  vipstart: 1365847580,
};
$done({ body: JSON.stringify(body) });
