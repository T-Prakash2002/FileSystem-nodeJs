const fs=require('fs')



fs.stat('file.txt',(err,stats)=>{
    if(err){
        console.log('Error');
    }console.log(stats);
})