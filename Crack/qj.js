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
const body = $response.body
  .replace(/\"vipend":\-1/g, '"vipend":2365847580')
  .replace(/\"viptype":\-1/g, '"viptype":100')
  .replace(/\"vipstart":\-1/g, '"vipstart":1365847580');
$done({ body: body });
