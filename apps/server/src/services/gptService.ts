import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const getModelsAvailale = async () => {
  try {
    const response = await axios.get(process.env.API_URL, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getAutoCompletition = async (prompt: string) => {
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

    return response.data.choices[0].text;
  } catch (error) {
    console.error('MODEL ERROR: ', error);
    throw error;
  }
};

export { getAutoCompletition, getModelsAvailale };
