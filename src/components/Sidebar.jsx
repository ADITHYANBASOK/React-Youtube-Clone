import { FiHome, FiTrendingUp, FiPlayCircle, FiClock, FiThumbsUp, FiBookmark, FiMusic, FiFilm, FiMonitor } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ isOpen }) {
  const menuItems = [
    { icon: FiHome, text: 'Home', path: '/' },
    { icon: FiTrendingUp, text: 'Trending', path: '/trending' },
    { icon: FiPlayCircle, text: 'Subscriptions', path: '/subscriptions' },
    { divider: true },
    { icon: FiBookmark, text: 'Library', path: '/library' },
    { icon: FiClock, text: 'History', path: '/history' },
    { icon: FiThumbsUp, text: 'Liked Videos', path: '/liked' },
    { divider: true },
    { heading: 'Explore' },
    { icon: FiMusic, text: 'Music', path: '/music' },
    { icon: FiFilm, text: 'Movies', path: '/movies' },
    { icon: FiMonitor, text: 'Gaming', path: '/gaming' },
  ];

  return (
    <aside
      className={`fixed left-0 top-14 h-full bg-yt-black transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      } overflow-y-auto`}
    >
      <div className="py-4">
        {menuItems.map((item, index) => {
          if (item.divider) {
            return <hr key={index} className="my-2 border-yt-light-black" />;
          }

          if (item.heading) {
            return isOpen ? (
              <h3 key={index} className="px-6 py-2 text-sm text-yt-gray font-medium">
                {item.heading}
              </h3>
            ) : null;
          }

          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-6 py-3 hover:bg-yt-light-black text-white ${
                  isActive ? 'bg-yt-light-black' : ''
                }`
              }
            >
              <Icon className="text-xl" />
              {isOpen && <span className="ml-4">{item.text}</span>}
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}