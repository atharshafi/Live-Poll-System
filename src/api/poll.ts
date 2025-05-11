import { Router } from 'express';
import { createPoll, votePoll, getPoll } from '../services/pollService';

export const pollRouter = Router();

pollRouter.post('/', createPoll);
pollRouter.post('/:id/vote', votePoll);
pollRouter.get('/:id', getPoll);
