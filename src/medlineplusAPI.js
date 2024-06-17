import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wsearch.nlm.nih.gov/ws/query',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const searchDisease = async (query) => {
  const response = await api.get('', {
    params: {
      db: 'healthTopics',
      term: query,
    },
  });
  return response.data;
};