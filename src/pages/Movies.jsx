import { useState, useEffect } from 'react';
import { searchVideos } from '../services/youtubeApi';
import VideoList from '../components/VideoList';
import PageHeader from '../components/ui/PageHeader';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';

export default function Movies() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadMovieTrailers();
  }, []);

  const loadMovieTrailers = async () => {
    try {
      const data = await searchVideos('movie trailers 2024');
      setVideos(data);
    } catch (err) {
      setError('Failed to load movie trailers');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="pt-4">
      <PageHeader title="Movies" />
      <VideoList videos={videos} />
    </div>
  );
}