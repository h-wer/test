/**
 * Created by Administrator on 2017/4/17.
 */
const path=require('path');
const fs=require('fs');

let cd=(curr,perev)=>{
    console.log(curr)
    console.log(perev)
}
fs.watchFile(path.join(__dirname,'./data.json',{interval:100},cd))
//fs.watch(path.join(__dirname,'./data.json'),(eventType,filename)=>{
//    console.log(eventType,filename);
//})

setTimeout(()=>{
    fs.unwatchFile(path.join(__dirname,'./data.json'))
},1000)