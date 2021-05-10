;
(async function () {
  try {
    // 1.连接数据库  (保证连接成功后,才执行后续代码)
    const conn = await require('../conn');
    console.log('数据库连接成功');

    // 2.创建model对象
    const studentsModel = require('../model');

    // 3.操作集合对象

    // (1) 增数据, 插入数据时, 可无需写回调函数
    // await studentsModel.create({
    //   name:'薛宝钗',
    //   age:20,
    //   gender:'女'
    // })

    // (2) 查数据
    // await studentsModel.find({name:/^\w+$/},{},(err,data)=>{
    //   if(err){
    //     console.log(err)
    //   }else{
    //     console.log(data)
    //   }
    // })

    // (3) 更新数据
    //  await studentsModel.updateOne({gender:'男'},{$set:{info:'暂无描述信息'}})
    const re1 = await studentsModel.updateOne({
      gender: '男'
    }, {
      $set: {
        info: '暂无描述信息'
      }
    })
    //  await studentsModel.updateMany({name:'lisi'},{$set:{lastOperateTime:Date.now()}},(err,data)=>{
    //   console.log(err,data);
    //  })
    console.log(re1);


    //  const re = await studentsModel.find({},{})
    //  console.log(re);


  } catch (error) {
    console.log(error);
  }


})()