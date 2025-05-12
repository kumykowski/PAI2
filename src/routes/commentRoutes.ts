import {
    addComment,
    getCommentsForBike,
    getCommentById,
    updateComment,
    deleteComment
  } from '../controllers/commentController';
import { Router } from 'express';  

const router = Router();

router.post('/bikes/:id/comments', addComment);
router.get('/bikes/:id/comments', getCommentsForBike);
router.get('/comments/:commentId', getCommentById);
router.put('/comments/:commentId', updateComment);
router.delete('/comments/:commentId', deleteComment);

export default router;
