/**
 * Created by Administrator on 2017/4/17.
 * 文件操作
 fs.open(path, flags[, mode], callback)
 path  文件的路径
 flags  打开文件的方式
 mode  Linux平台有效，可以控制文件的读、写、可执行 777，参数是可选的
 callback 回调函数（err,fd）
 */
const path=require('path');
const fs=require('fs');
fs.open(path.join(__dirname,'./data.txt'),'r',(err,fd)=>{
    //fd file discriptor 文件描述符,通过fd可以操作文件，默认从3卡死，打开多次累加
    if(err){
        console.log(err);
    }
    console.log(err,fd)
})


//同步方法的返回值表示fd

//let ret = fs.openSync(path.join(__dirname,'./data.txt'),'r');
//console.log(ret)
//let ret = fs.openSync(path.join(__dirname,'./data.txt'),'r');
//console.log(ret);









