const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI ||'mongodb+srv://root:gOoQLTn43vC8EZgq@cluster0.xfxutas.mongodb.net/SupplyChain';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  email: String,
  savedNotes: [{
    articleTitle: String,
    note: String,
    URL: String,
  }],
});

const User = mongoose.model('User', userSchema);

const saveNote = async (req, res, next) => {
  // Check if all required fields are present in the request body
  if (!req.body.email || !req.body.articleTitle || !req.body.URL) {
    res.send({ message: 'Invalid request. Missing required fields.' });
    return;
  }

  try {
    const email = req.body.email;
    const articleTitle = req.body.articleTitle;
    const note = req.body.note;
    const url = req.body.URL;

    // Check if the specified email exists in the database
    const user = await User.findOne({ email: email });
    if (!user) {
      res.send({ message: 'Email does not exist.' }); // Send a response indicating that the email does not exist
      return;
    }

  
    
    // Check if a note with the given articleTitle, email, and URL already exists in the savedNotes array
    const existingNote = user.savedNotes.find(note => note.articleTitle === articleTitle && note.URL === url);
    if (existingNote) {
      existingNote.note = note;
      await user.save();
      res.send({ message: 'Note updated.' }); // Send a response indicating that the note was updated
    } else {
      // Add the new note to the user's savedNotes array
      user.savedNotes.push({ articleTitle, note, URL: url });
      await user.save();
      res.send({ message: 'Note saved.' }); // Send a response indicating that the note was saved
    }
  } catch (error) {
    res.status(500).send({ message: 'Error connecting to the database.' });
  }
};

const deleteNote = async (req, res, next) => {
  // Check if all required fields are present in the request body
  if (!req.body.email || !req.body.articleTitle || !req.body.URL) {
    res.send({ message: 'Invalid request. Missing required fields.' });
    return;
  }

  try {
    const email = req.body.email;
    const articleTitle = req.body.articleTitle;
    const url = req.body.URL;

    // Check if the specified email exists in the database
    const user = await User.findOne({ email: email });
    if (!user) {
      res.send({ message: 'Email does not exist.' }); // Send a response indicating that the email does not exist
      return;
    }

    // Find the index of the note with the given articleTitle and URL in the savedNotes array
    const noteIndex = user.savedNotes.findIndex(note => note.articleTitle === articleTitle && note.URL === url);
    if (noteIndex === -1) {
      res.send({ message: 'Note does not exist.' }); // Send a response indicating that the note does not exist
      return;
    }

    // Remove the note from the savedNotes array
    user.savedNotes.splice(noteIndex, 1);
    await user.save();

    res.send({ message: 'Note deleted.' }); // Send a response indicating that the note was deleted
  } catch (error) {
    res.status(500).send({ message: 'Error connecting to the database.' });
  }
};



exports.deleteNote = deleteNote;


exports.saveNote = saveNote;
