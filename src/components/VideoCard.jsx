import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

export default function VideoCard({ video }) {
  const {
    id,
    snippet: { title, channelTitle, thumbnails, publishedAt },
    statistics,
  } = video;

  return (
    <Link to={`/video/${id}`} className="flex flex-col">
      <div className="relative">
        <img
          src={thumbnails.medium.url}
          alt={title}
          className="w-full rounded-lg"
        />
        {statistics?.viewCount && (
          <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
            {parseInt(statistics.viewCount).toLocaleString()} views
          </span>
        )}
      </div>
      <div className="mt-2">
        <h3 className="text-white font-medium line-clamp-2">{title}</h3>
        <p className="text-yt-gray text-sm mt-1">{channelTitle}</p>
        <p className="text-yt-gray text-sm">
          {formatDistanceToNow(new Date(publishedAt))} ago
        </p>
      </div>
    </Link>
  );
}