import express from 'express';
import { getAllNotes, getNoteById } from '../controllers/notesController.js';

const router = express.Router();

router.get('/notes', getAllNotes);
router.get('/notes/:noteId', getNoteById);

export default router;
