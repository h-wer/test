/**
 * Created by Administrator on 2017/4/17.
 */
const path=require('path');
const fs=require('fs');
fs.writeFile(path.join(__dirname,'./data.txt'),'ni',(err)=>{
    console.log(err);
})