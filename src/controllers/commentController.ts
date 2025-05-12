import { Request, Response } from 'express';

let comments: { id: number, bikeId: number, content: string }[] = [];
let commentIdCounter = 1;

export const addComment = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { content } = req.body;
  const newComment = { id: commentIdCounter++, bikeId: parseInt(id), content };
  comments.push(newComment);
  res.status(201).json(newComment);
};

export const getCommentsForBike = (req: Request, res: Response): void => {
  const { id } = req.params;
  const bikeComments = comments.filter(c => c.bikeId === parseInt(id));
  res.json(bikeComments);
};

export const getCommentById = (req: Request, res: Response): void => {
  const { commentId } = req.params;
  const comment = comments.find(c => c.id === parseInt(commentId));
  if (!comment) {
    res.status(404).json({ message: 'Komentarz nie znaleziony' });
    return;
  }
  res.json(comment);
};

export const updateComment = (req: Request, res: Response): void => {
  const { commentId } = req.params;
  const { content } = req.body;
  const comment = comments.find(c => c.id === parseInt(commentId));
  if (!comment) {
    res.status(404).json({ message: 'Komentarz nie znaleziony' });
    return;
  }
  comment.content = content;
  res.json(comment);
};

export const deleteComment = (req: Request, res: Response): void => {
  const { commentId } = req.params;
  const index = comments.findIndex(c => c.id === parseInt(commentId));
  if (index === -1) {
    res.status(404).json({ message: 'Komentarz nie znaleziony' });
    return;
  }
  comments.splice(index, 1);
  res.status(204).send();
};
