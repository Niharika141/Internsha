import axios from 'axios';

const API_KEY = '0937827fca5d46938d497b264a310998';
export const fetchNews = async () => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2024-05-27&sortBy=publishedAt&apiKey=0937827fca5d46938d497b264a310998=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return null;
  }
};
export default Api;
