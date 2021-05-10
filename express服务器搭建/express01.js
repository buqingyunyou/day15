// 1.引入express包
const express = require('express');

// 2.调用express方法,获取应用对象
const app = express();

// 通过引用对象处理get/post请求,及响应数据到客户端
app.get('/',(request,response)=>{
  // (1)获取请求的参数, 通过request.query属性获取
  console.log(request.query,'/d的请求');
  // (2)向客户端响应数据, 通过response.send(data)实现
  response.send('已收到get/请求');
})

app.get('/abc',(request,response)=>{
  console.log(request.query,"get/abc的请求");
  response.send('已收到get/abc请求');
})

app.post('/',(request,response)=>{
  console.log(request.query,'post/的请求');
  response.send('<h1>post/的请求已收到</h1>')
})
app.post('/abc',(request,response)=>{
  console.log(request.query,'post/abc请求');
  response.send('<h1>post/abc的请求已收到</h1>')
})


// 3.启动服务器
app.listen(5000,(err)=>{
  if(err)console.log("express服务器启动失败",err)
  else console.log("express服务器启动成功");
})

