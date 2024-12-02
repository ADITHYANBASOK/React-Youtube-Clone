import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchVideos } from '../services/youtubeApi';
import VideoList from '../components/VideoList';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      loadSearchResults();
    }
  }, [query]);

  const loadSearchResults = async () => {
    try {
      setLoading(true);
      const data = await searchVideos(query);
      setVideos(data);
    } catch (err) {
      setError('Failed to load search results');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-white text-center mt-20">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-20">{error}</div>;

  return (
    <div className="pt-14 pl-[5rem]">
      <h2 className="text-white text-xl p-4">Search results for: {query}</h2>
      <VideoList videos={videos} />
    </div>
  );
}