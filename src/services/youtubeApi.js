import axios from 'axios';

const BASE_URL = 'https://youtube.googleapis.com/youtube/v3';
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const youtubeApi = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export const fetchTrendingVideos = async () => {
  try {
    const response = await youtubeApi.get('/videos', {
      params: {
        part: 'snippet,statistics',
        chart: 'mostPopular',
        maxResults: 20,
        regionCode: 'US',
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching trending videos:', error);
    throw error;
  }
};

export const searchVideos = async (query) => {
  try {
    const response = await youtubeApi.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 20,
        q: query,
        type: 'video',
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error searching videos:', error);
    throw error;
  }
};

export const getVideoDetails = async (videoId) => {
  try {
    const response = await youtubeApi.get('/videos', {
      params: {
        part: 'snippet,statistics',
        id: videoId,
      },
    });
    return response.data.items[0];
  } catch (error) {
    console.error('Error fetching video details:', error);
    throw error;
  }
};