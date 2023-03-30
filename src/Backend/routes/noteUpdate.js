// const mongoose = require('mongoose');

// const uri = 'mongodb+srv://root:gOoQLTn43vC8EZgq@cluster0.xfxutas.mongodb.net/SupplyChain';

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// const userSchema = new mongoose.Schema({
//   email: String,
//   savedNotes: [{
//     articleTitle: String,
//     note: String,
//     URL: String,
//   }],
// });

// const User = mongoose.model('User', userSchema);


// const updateNote = async (req, res, next) => {
//     // Check if all required fields are present in the request body
//     if (!req.body.email || !req.body.articleTitle || !req.body.URL) {
//       res.send({ message: 'Invalid request. Missing required fields.' });
//       return;
//     }
  
//     try {
//       const email = req.body.email;
//       const articleTitle = req.body.articleTitle;
//       const note = req.body.note;
//       const url = req.body.URL;
  
//       // Check if the specified email exists in the database
//       const user = await User.findOne({ email: email });
//       if (!user) {
//         res.send({ message: 'Email does not exist.' }); // Send a response indicating that the email does not exist
//         return;
//       }
  
//       // Check if a note with the given articleTitle, email, and URL already exists in the savedNotes array
//       const existingNote = user.savedNotes.find(note => note.articleTitle === articleTitle && note.URL === url);
//       if (!existingNote) {
//         res.send({ message: 'Note not found.' }); // Send a response indicating that the note was not found
//         return;
//       }
  
//       // Update the note with the given articleTitle and URL
//       existingNote.note = note;
//       await user.save();
//       res.send({ message: 'Note updated.' }); // Send a response indicating that the note was updated
//     } catch (error) {
//       res.status(500).send({ message: 'Error connecting to the database.' });
//     }
//   };
  
//   exports.updateNote = updateNote;
  
