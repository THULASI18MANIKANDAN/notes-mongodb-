const express = require('express');
const router = express.Router();
const Note = require('../../models/Note');

// @route   GET api/notes
// @desc    Get all notes, sorted by most recently updated
// @access  Public
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find().sort({ updatedAt: -1 });
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// @route   POST api/notes
// @desc    Create a new note
// @access  Public
router.post('/', async (req, res) => {
  const { title, content } = req.body;

  if (!title) {
    return res.status(400).json({ msg: 'Title is required' });
  }

  try {
    const newNote = new Note({
      title,
      content,
    });

    const note = await newNote.save();
    res.status(201).json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// @route   PUT api/notes/:id
// @desc    Update an existing note
// @access  Public
router.put('/:id', async (req, res) => {
  const { title, content } = req.body;

  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true, runValidators: true } // Return the updated document and run schema validators
    );

    if (!note) {
      return res.status(404).json({ msg: 'Note not found' });
    }

    res.json(note);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Note not found' });
    }
    res.status(500).json({ msg: 'Server Error' });
  }
});

// @route   DELETE api/notes/:id
// @desc    Delete a note by ID
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({ msg: 'Note not found' });
    }

    res.json({ msg: 'Note removed successfully' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Note not found' });
    }
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
