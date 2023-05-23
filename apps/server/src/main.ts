import express from 'express';
import * as path from 'path';
import { callApi } from '.';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (_req, res) => {
  res.send({ message: 'Welcome to server!' });
});

app.post('/api/create-completion', async (req, res) => {
  const { prompt } = req.body;
  const data = await callApi(prompt);
  res.send({ data });
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
