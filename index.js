const fs=require('fs')
const express=require('express');
const date = require('date-and-time') 


const app=express();

app.get('/',(req,res)=>{
    res.send(`

    

        <center>
        <h1 style="background-color:orange;padding:10px 0px;text-align:center;color:white">
           File System NodeJs<p>Create a File,Write and Read </p></h1>
        <div style="margin-top:50px">

            <a style="background-color:rgb(240, 128, 128);padding:10px;text-decoration:none; color:white" href='/new_file'>Create a file -></a>
            <br><br><br><br>
            <a style="background-color:rgb(240, 128, 128);padding:10px;text-decoration:none; color:white" href='/show_files'>Show files -></a>
        
        </div>
    </center>
    `)
})


app.get('/new_file',(req,res)=>{
    
try {
    
    const date = require('date-and-time') 
  

    const now  =  new Date(); 
    
    const value = date.format(now, "DD-MM-YYYY HH-MM-SS"); 

    const filePath = `./TimeStamp/${value}.txt`;

    const content = `Current TimeStamp : ${value}`;

    fs.writeFileSync(filePath, content, 'utf8');

    let data = fs.readFileSync(filePath, 'utf8');

    res.send(`
    
    <div style="background-color:orange;padding:10px 0px;text-align:center;color:white">
        <h1>File created and Wrote content successfully!</h1>
        <p>Created File Name : ${value}.txt</p>
        <p>Txt File Content : ${data}</p>
        <p><a href="/" style="color:#DAD4E7 ">Back to Home</a></p>
    </div>`);


} catch (error) {
    console.log(error);
}
})

app.get('/show_files',(req,res)=>{

    try {
        
        const files = fs.readdirSync('./TimeStamp');

        const AllFiles = files.filter(item => item.endsWith('.txt'));

        res.send(`

        <div style="background-color:orange;padding:10px 0px;text-align:center;color:white">
           <h1>Show All Text Files</h1><p><a href="/" style="color:#DAD4E7 ">Back to Home</a></p></div>
           
           ${
            AllFiles.map(item => 
            `<ul>
            <li>
                <b>File Name : </b>${item}
            </li>
            <li>
                <b>File Content : </b>
                ${fs.readFileSync(`./TimeStamp/${item}`, 'utf8')}
            </li>
            </ul><hr>`).join('')
        }
            
           
        `)

    } catch (error) {
        console.log(error);
    }
})



app.listen(4000,()=>{

    console.log(`Server Running success in Port 4000`);
})

