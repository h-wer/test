/**
 * Created by Administrator on 2017/4/17.
 */
const path=require('path');
const fs=require('fs');
console.log(path);
fs.unlink(path.join(__dirname,'./data.text',(err)=>{
console.log(err)
}))
