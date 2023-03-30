// const MongoClient = require('mongodb').MongoClient; 


// const url = process.env.MONGODB_URI ||'mongodb+srv://root:gOoQLTn43vC8EZgq@cluster0.xfxutas.mongodb.net/?retryWrites=true&w=majority'



// const Cluster = async(req, res, next) => {

//     const client = new MongoClient(url); 
//     let articles; 

//     try{
//         await client.connect(); 
//         const db = client.db('SupplyChain'); 
//         articles = await db.collection('main').find({ Category: req.body }); 

//     } catch (error){
//         return res.json({message: 'Could not retrieve user. '}); 
//     };

//     client.close(); 


//     res.json(articles); 



// }; 


// exports.Cluster = Cluster;