import { Note } from '../models/note.js';

export const getAllNotes = async (req, res, next) => {
  try {
    const notes = await Note.find();

    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};
