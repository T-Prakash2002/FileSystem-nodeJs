const fs=require('node:fs')




try {
    
    // fs.readFile('file.txt','utf-8',(err,data)=>{
    //     
    //     console.log(data);
    //     
    // })

    text='modified'

    fs.writeFile('file.txt',text,err=>{
        err?console.log(err):console.log('sucessfull');;
    })


} catch (error) {
    console.log(error);
}