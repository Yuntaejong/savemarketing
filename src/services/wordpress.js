import axios from 'axios';

const API_URL = 'http://savemarketing.co.kr/wp-json';

export const getPages = async () => {
  try {
    const response = await axios.get(`${API_URL}/wp/v2/pages?_embed`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pages:', error);
    throw error;
  }
};

export const getPageBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/wp/v2/pages?slug=${slug}&_embed`);
    return response.data[0]; // 첫 번째 결과 반환
  } catch (error) {
    console.error(`Error fetching page with slug ${slug}:`, error);
    throw error;
  }
};