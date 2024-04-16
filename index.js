
const {MongoClient}=require('mongodb')

const uri=`mongodb+srv://prakasht1405:MongoDB145@cluster0.korygfe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const client=new MongoClient(uri);

async function main(){
    try {
    
        await client.connect()
        console.log("connected DB");

        const database=client.db('sample_mflix');
        const collection=database.collection('users')
        
        const result=await collection.find({}).toArray();

        console.log(result.map(item=>item.name));
        
        
        } 
        finally{
            await client.close();
        }
}

main().catch((err)=>{
    console.log(err);
})