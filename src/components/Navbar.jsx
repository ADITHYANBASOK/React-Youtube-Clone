import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiSearch, FiUser } from 'react-icons/fi';

export default function Navbar({ toggleSidebar }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-yt-black flex items-center justify-between px-4 z-50">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-yt-light-black rounded-full"
        >
          <FiMenu className="text-white text-xl" />
        </button>
        <Link to="/" className="ml-4 flex items-center">
          <img
            src="/youtubeclone.png"
            alt="YouTube-Clone"
            className="h-5"
          />
           Youtube Clone
        </Link>
      </div>

      <form
        onSubmit={handleSearch}
        className="flex items-center flex-1 max-w-2xl mx-4"
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="w-full px-4 py-2 bg-yt-light-black text-white rounded-l-full focus:outline-none"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-yt-light-black text-white rounded-r-full hover:bg-yt-gray"
        >
          <FiSearch className="text-xl" />
        </button>
      </form>

      <div className="flex items-center">
        <button className="p-2 hover:bg-yt-light-black rounded-full">
          <FiUser className="text-white text-xl" />
        </button>
      </div>
    </nav>
  );
}