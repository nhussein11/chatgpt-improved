import express from 'express';
import { getAutoCompletition } from '../services/gptService';

const gptRouter = express.Router();

gptRouter.get('/', (_req, res) => {
  console.log('API_KEY', process.env.API_KEY);
  console.log('API_URL', process.env.API_URL);
  res.send({ message: 'Welcome to server!' });
});

gptRouter.post('/create-completion', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    res.status(400).send({ error: 'Prompt is required' });
  }

  try {
    const data = await getAutoCompletition(prompt);
    res.status(200).send({ data });
  } catch (error) {
    // TODO: check if this is the correct status code
    res.status(400).send({ error });
  }
});

export default gptRouter;
