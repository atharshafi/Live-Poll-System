import { Request, Response } from 'express';
import { db } from '../db';

export const createPoll = async (req: Request, res: Response) => {
  const { question, options, expiresAt } = req.body;
  const poll = await db.createPoll(question, options, expiresAt);
  res.json(poll);
};

export const votePoll = async (req: Request, res: Response) => {
  const user = req.headers.authorization;
  const { option } = req.body;
  const result = await db.vote(req.params.id, user!, option);
  res.json(result);
};

export const getPoll = async (req: Request, res: Response) => {
  const poll = await db.getPoll(req.params.id);
  res.json(poll);
};
