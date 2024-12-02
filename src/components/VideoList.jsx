import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import VideoCard from './VideoCard';

export default function VideoList({ videos, onLoadMore }) {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && onLoadMore) {
      onLoadMore();
    }
  }, [inView, onLoadMore]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {videos.map((video) => {
        const videoId = video.id?.videoId || video.id;
        return <VideoCard key={videoId} video={video} />;
      })}
      <div ref={ref} className="h-10" />
    </div>
  );
}