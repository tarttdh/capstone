const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI ||'mongodb+srv://root:gOoQLTn43vC8EZgq@cluster0.xfxutas.mongodb.net/SupplyChain';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



const updateUser = async (req, res, next) => {
  try {
    const { email, username } = req.body;

    await client.connect();

    // Find the user with the given email address and update the username
    const db = client.db();
    await db.collection('users').findOneAndUpdate(
      { email },
      { $set: { username } },
      { upsert: true }
    );

    // Send a success message in the response
    res.json({ success: true, message: 'Username updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  } finally {
    await client.close();
  }
};


exports.updateUser = updateUser;
