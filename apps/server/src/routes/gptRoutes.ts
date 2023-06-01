import express from 'express';
import { getAutoCompletition } from '../services/gptService';
import axios from 'axios';

const gptRouter = express.Router();

gptRouter.get('/', async (_req, res) => {
  console.log('API_KEY', process.env.API_KEY);
  console.log('API_URL', process.env.API_URL);

  try {
    const response = await axios.post(
      process.env.API_URL,
      {
        prompt,
        temperature: 0.7,
        max_tokens: 256,
        stop: ['Human:', 'AI:'],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('response', response.data.choices[0].text);
  } catch (error) {
    console.error('MOCK ERROR: ', error);
    throw error;
  }
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
