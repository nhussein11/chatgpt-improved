import axios from 'axios';

const createCompletion = async (prompt: string) => {
  const response = await axios.post(
    'http://localhost:3000/api/create-completion',
    { prompt }
  );

  return response.data;
};

export default createCompletion;
