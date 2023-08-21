
//server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5001;

// Middleware for parsing JSON data in requests.
app.use(express.json());

// Middleware for handling CORS (Cross-Origin Resource Sharing) issues.
app.use(cors());

// Connect to MongoDB
const mongoURI = 'mongodb+srv://admin:zN8eWj1yRxRYqA2p@uleg.eadsnyj.mongodb.net/uLeg?retryWrites=true&w=majority';

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Example: Define a schema for the "Draft" collection.
const draftSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

// Create the "Draft" model based on the schema.
const Draft = mongoose.model('Draft', draftSchema);

// API endpoint to handle data submission for the Draft page.
app.post('/api/drafts', async (req, res) => {
  try {
    const { title, content } = req.body;
    const draft = new Draft({ title, content });

    // Save the draft to the database.
    await draft.save();

    // Send a response indicating success.
    res.json({ message: 'Draft submitted successfully.' });
  } catch (error) {
    console.error('Error submitting draft:', error);
    res.status(500).json({ error: 'Failed to submit draft.' });
  }
});

// Example API endpoint to fetch data from MongoDB and send it as a response.
// API endpoint to fetch all drafts
app.get('/api/drafts', async (req, res) => {
  try {
    // Fetch all drafts from the "Draft" collection in MongoDB
    const drafts = await Draft.find();
    res.json(drafts);
  } catch (error) {
    console.error('Error fetching drafts:', error);
    res.status(500).json({ error: 'Failed to fetch drafts' });
  }
});


app.get('/api/drafts/:draftId', async (req, res) => {
    try {
      const draftId = req.params.draftId;
  
      // Fetch the draft with the specified draftId from the "Draft" collection in MongoDB
      const draft = await Draft.findById(draftId);
  
      if (!draft) {
        return res.status(404).json({ error: 'Draft not found.' });
      }
  
      res.json(draft);
    } catch (error) {
      console.error('Error fetching draft details:', error);
      res.status(500).json({ error: 'Failed to fetch draft details.' });
    }
  });
  
  app.put('/api/drafts/:draftId', async (req, res) => {
    try {
      const draftId = req.params.draftId;
      const { title, content } = req.body;
  
      // Find the draft by ID and update its title and content
      const updatedDraft = await Draft.findByIdAndUpdate(
        draftId,
        { title, content },
        { new: true } // Return the updated draft
      );
  
      if (!updatedDraft) {
        return res.status(404).json({ error: 'Draft not found.' });
      }
  
      res.json(updatedDraft);
    } catch (error) {
      console.error('Error updating draft:', error);
      res.status(500).json({ error: 'Failed to update draft.' });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});



