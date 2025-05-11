import express, { Request, Response } from 'express';  // Ensure Request and Response are from express
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { authRouter } from './api/auth';
import { pollRouter } from './api/poll';
import { setupPollSocket } from '@sockets/pollSocket';

dotenv.config();

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/auth', authRouter);
app.use('/poll', pollRouter);

// WebSocket setup
setupPollSocket(wss);

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Metrics route - Ensure this matches the correct type signature
app.get('/metrics', (_: Request, res: Response) => {
  res.send(`# HELP qps Total queries\nqps 1`);
});

// Start the server
server.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
