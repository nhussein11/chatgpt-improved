import express from 'express';
import * as path from 'path';
import { callApi } from '.';
import cors from 'cors';
const app = express();

app.use(cors());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (_req, res) => {
  res.send({ message: 'Welcome to server!' });
});

app.post('/api/create-completion', async (_req, res) => {
  const data = await callApi();
  res.send({data});
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
