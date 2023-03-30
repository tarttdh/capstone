const MongoClient = require('mongodb').MongoClient; 


const url = process.env.MONGODB_URI ||'mongodb+srv://root:gOoQLTn43vC8EZgq@cluster0.xfxutas.mongodb.net/?retryWrites=true&w=majority'



const getUser = async(req, res, next) => {

    const client = new MongoClient(url); 
    let user; 

    try{
        await client.connect(); 
        const db = client.db('SupplyChain'); 
        user = await db.collection('users').findOne({ email: req.body.email }); 

    } catch (error){
        return res.json({message: 'Could not retrieve user. '}); 
    };

    client.close(); 


    res.json(user); 



}; 


exports.getUser = getUser