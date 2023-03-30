const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGODB_URI ||'mongodb+srv://root:gOoQLTn43vC8EZgq@cluster0.xfxutas.mongodb.net/?retryWrites=true&w=majority';

const updateURL = async (req, res, next) => {
  const client = new MongoClient(uri, { useNewUrlParser: true });

  try {
    await client.connect();
    const db = client.db("SupplyChain").collection("users");
    const email = req.body.email;
    const url = req.body.URL;

    await db.updateOne({ email: email }, { $push: { URLs: url } });
    res.send({ message: 'User updated.' });
  } catch (error) {
    res.status(500).send({ message: 'Error connecting to the database.' });
  } finally {
    client.close();
  }
};

exports.updateURL = updateURL;
