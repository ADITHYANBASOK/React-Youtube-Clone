import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoDetails } from '../services/youtubeApi';
import { formatDistanceToNow } from 'date-fns';

export default function VideoDetails() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadVideoDetails();
  }, [id]);

  const loadVideoDetails = async () => {
    try {
      const data = await getVideoDetails(id);
      setVideo(data);
    } catch (err) {
      setError('Failed to load video details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-white text-center mt-20">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-20">{error}</div>;
  if (!video) return null;

  return (
    <div className="pt-14 pl-[5rem] p-4">
      <div className="max-w-6xl mx-auto">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={video.snippet.title}
            className="w-full h-[60vh]"
            allowFullScreen
          />
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-white">{video.snippet.title}</h1>
          <div className="flex items-center mt-2">
            <p className="text-yt-gray">
              {parseInt(video.statistics.viewCount).toLocaleString()} views •{' '}
              {formatDistanceToNow(new Date(video.snippet.publishedAt))} ago
            </p>
          </div>
          <div className="mt-4 p-4 bg-yt-light-black rounded-lg">
            <p className="text-white whitespace-pre-wrap">
              {video.snippet.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}