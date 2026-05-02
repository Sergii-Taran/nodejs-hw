import express from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
} from '../controllers/notesController.js';

const router = express.Router();

router.get('/notes', getAllNotes);
router.get('/notes/:noteId', getNoteById);
router.post('/notes', createNote);

export default router;
