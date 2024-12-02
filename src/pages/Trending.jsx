import { useState, useEffect } from 'react';
import { fetchTrendingVideos } from '../services/youtubeApi';
import VideoList from '../components/VideoList';
import PageHeader from '../components/ui/PageHeader';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';

export default function Trending() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTrendingVideos();
  }, []);

  const loadTrendingVideos = async () => {
    try {
      const data = await fetchTrendingVideos();
      setVideos(data);
    } catch (err) {
      setError('Failed to load trending videos');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="pt-4">
      <PageHeader title="Trending" />
      <VideoList videos={videos} />
    </div>
  );
}