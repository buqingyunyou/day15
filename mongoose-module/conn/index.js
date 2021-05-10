// 引入mongoose库

const mongoose = require('mongoose');

// 连接数据库,并将返回值(promise对象)导出
module.exports = mongoose.connect('mongodb://localhost:27017/web0223-02');