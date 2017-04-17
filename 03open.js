/**
 * Created by Administrator on 2017/4/17.
 * fs.write(fd,buffer,offsete,length[,position],callback)
 fs.write(fd, data[, position[, encoding]], callback)
 */
const path=require('path');
const fs=require('fs');

fs.open(path.join(__dirname,'./data.txt'),'w',(err,fd)=>{
    let buf=Buffer.from('中国')
    fs.write(fd,buf,0,6,(err,written,buffer)=>{
        console.log(err,written,buffer);
    })
})
fs.open(path.join(__dirname,'./data.txt'),'w',(err,fd)=>{
    fs.write(fd,'程序员',(err,written,str)=>{
        console.log((err, write, str));
    })
})
    //writeren 指的是字节数量，而我不是字符数量

