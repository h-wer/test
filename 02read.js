/**
 *     fs.read(fd, buffer, offset, length, position, callback)
 *      fd 文件描述符
 *      buffer 读取的数据放到buffer中
 *      offset 读取的数据从buffer的第几个位置开始写
 *      length 读取文件中数据的字节数量
 *      posieton 从文件的什么位置开始读
 *      callback 回调函数（err，bytes，buffer）
 */

const path=require('path');
const fs=require('fs');
fs.open(path.join(__dirname,'./data.txt'),'r',(err,fd)=>{
    let buf=Buffer.alloc(5);
    fs.read(fd,buf,1,3,null,(err,bytes,buffer)=>{
        console.log(err,bytes,buffer);//bytes表示不去的字节数量
        console.log(buf);//读取的文件内容
    })
})
