// 引入mongoose库 (在同一个项目下,如果在其他js文件中已经引入mongoose库, 则在此js文件中再次引入时, 其实是直接去内存中找对应的对象)
const mongoose = require('mongoose');

// 创建Schema对象
const Schema = mongoose.Schema;
const StudentsSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  gender:{
    type:String,
    default:'男'
  },
  info:{
    type:Schema.Types.Mixed,
    default:'暂无描述信息'
  },
  lastOperateTime:{
    type:Date,
    default:Date.now()
  }
},{collation:"students"})

// 创建model具体对象, 并将其导出
module.exports = mongoose.model('students',StudentsSchema);
