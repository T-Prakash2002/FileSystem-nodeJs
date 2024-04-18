const fs=require('fs')
const express=require('express')


const app=express();


app.get('/', (req, res)=>{

    //Sending response status
    res.status(200).send(`

            <div style="border:1px solid black">

            <h1 
            style="padding:10px 10px;text-align:center;background-color:gray;">
            Express Server is Connected !
            </h1>
            <div style="text-align:center">
            <p>
            <span style="font-size:18px"> 
                To Create a New txt file
            </span> --> <br>
            <button style="border:2px solid Tomato;font-size:18px;border-radius:9px;">
                <a style="text-decoration:none" href="/new-file">
                    Click Here
                </a>
            </button>
            </p>
            <p>
            <span style="font-size:18px">
                Show All txt file
                </span> --> <br>
                <button style="border:2px solid Tomato;font-size:18px;border-radius:9px;">
            <a style="text-decoration:none;" href="/read-all-files">
                Click Here
            </a>
            </button>
            </p>

            </div></div>
    `);
    
});

app.get('/new-file',(res,req)=>{
    
    
})


app.get('/read-all-files',(res,req)=>{

})






app.listen(4000,()=>{
    console.log(`Server Running success in Port 4000`);
})

