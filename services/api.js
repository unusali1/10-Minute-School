import axios from 'axios';

const API_BASE = 'https://api.10minuteschool.com/discovery-service/api/v1/products'; 

export const GET_COURESES = (lang) =>
  axios.get(`${API_BASE}/ielts-course?lang=${lang}`, {
    headers: {
      'X-TENMS-SOURCE-PLATFORM': 'web',
      Accept: 'application/json',
    },
  });

