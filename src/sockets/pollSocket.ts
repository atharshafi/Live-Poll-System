import { WebSocketServer } from 'ws';

export const setupPollSocket = (wss: WebSocketServer) => {
  wss.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('message', (msg) => {
      console.log('Received:', msg);
      // echo or broadcast updates (you can enhance this)
    });

    socket.on('close', () => {
      console.log('Client disconnected');
    });
  });
};
