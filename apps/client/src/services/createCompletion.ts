import axios from 'axios';
import { isProductionEnv } from '../../../global-utils/environment';

const createCompletion = async (prompt: string) => {
  const endpoint = isProductionEnv
    ? 'https://chatgpt-improved-api.onrender.com/api/create-completion'
    : // https://chatgpt-improved-api.onrender.com/api
      'http://localhost:3000/api/create-completion';

  console.log('endpoint', endpoint);
  const response = await axios.post(endpoint, { prompt });
  console.log('response', response.data);
  return response.data;
};

export default createCompletion;
