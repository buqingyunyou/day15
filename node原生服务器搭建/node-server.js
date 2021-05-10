
// 1. 引入http协议模块
const http = require('http');

// 引入查询字符串
const queryString = require('querystring');

// 2. 通过http对象,创建服务器对象
const server = http.createServer((request,response)=>{
  const requestStr = request.url.split('?')[1];
  const requestObj = queryString.parse(requestStr)
  console.log(requestObj);

  // response.setHeader("content-type","text/html;charset=utf-8");
  response.setHeader('content-type','text/html;charset=utf-8'); //解决响应过去的中文乱码问题
  response.end("服务器响应的数据")
})

//借助nodemon工具(全局), 开启后如果服务器代码修改, nodemon工具会自动重新启动服务器


// 3. 开启服务器
server.listen(5000,(err)=>{
  if(err) console.log("服务器启动失败",err);
  else console.log("服务器启动成功")
})