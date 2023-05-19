import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const callApi = async () => {
  try {
    const response = await axios.post(
      process.env.API_URL,
      {
        model: 'text-davinci-003',
        prompt: 'Human: Hello\\nAI:',
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

    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
  }
};
