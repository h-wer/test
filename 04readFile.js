/**
 * Created by Administrator on 2017/4/17.
 * fs.readFile(file[,options],callback)
 * file 表示文件名称或者文件描述符
 * options 可以是字符串形式， 便是编码 可以是对象（encoding，flag）
 * callback 回调函数（err，data 实际读取的数据）
 */
const path = require('path');
const fs=require('fs');
//第二个参数指定编码，回调函数中的data是字符串，不指定的是Buffer

fs.readFile(path.join(__dirname,'./data.txt'),(err,data)=>{
    console.log(data.toString())
});
//fs.readFile(path.join(__dirname,'./data.txt'),'utf8',(err,data)=>{
//    console.log(data)
//})