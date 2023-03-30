const MongoClient = require('mongodb').MongoClient; 


const url = process.env.MONGODB_URI || 'mongodb+srv://root:gOoQLTn43vC8EZgq@cluster0.xfxutas.mongodb.net/?retryWrites=true&w=majority'



const Category = async(req, res, next) => {

    const client = new MongoClient(url); 
    let articles; 

  
  try {
    await client.connect();
    const db = client.db('SupplyChain');
    const query = { Category: { $regex: /Broad/i } };
    articles = await db.collection('main').find(query).toArray();
  } catch (error) {
    return res.json({ message: 'Could not retrieve articles.' });
  };

    client.close(); 

 
    res.json(articles); 



}; 


exports.Category = Category