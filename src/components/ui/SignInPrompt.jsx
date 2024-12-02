import { FiUser } from 'react-icons/fi';

export default function SignInPrompt({ message }) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="p-4 rounded-full bg-yt-light-black">
        <FiUser className="text-4xl text-white" />
      </div>
      <p className="mt-4 text-white text-center">{message}</p>
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
        Sign In
      </button>
    </div>
  );
}