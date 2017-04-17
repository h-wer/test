/**
 * Created by Administrator on 2017/4/17.
 */

const patch=require('path');
const fs=require('fs');

let sPath='C:\\Users\\Administrator\\Desktop\\file.zip';
let tPath='C:\\Users\\Administrator\\Desktop\\file1.7z';

let readStream=fs.createReadStream(sPath);
let writeStream=fs.cereateWriteStresm(tPath);

let nu=1;
//基于事件的回调函数

readStream.on('data',(chunk)=>{
    nu+=1;
    writeStream.write(chunk);
});
readStream.on('end',()=>{
    console.log('处理完成'+nu)
})
