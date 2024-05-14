import { Link } from 'react-router-dom';

interface ChatProps {
  chat?: string;
  errorCode?: number;
  errorMessage?: string;
}

export const Chat: React.FC<ChatProps> = ({ chat, errorCode = 404, errorMessage = 'Page Not Found' }) => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-9xl font-bold mb-8">{errorCode}</h1>
        <h2 className="text-5xl font-semibold mb-6">{errorMessage}</h2>
        <p className="text-xl mb-8">
          The page you were looking for does not exist or has been removed.
        </p>

        {chat && (
          <p className="text-lg mb-12">
            You were looking for: <span className="font-semibold">{chat}</span>
          </p>
        )}

        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
          <Link
            to="/"
            className="px-8 py-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300 text-center"
          >
            Go to Home Page
          </Link>
          <button
            className="px-8 py-4 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors duration-300 text-center"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-4">Suggested Pages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
              <h4 className="text-xl font-semibold mb-2">Home page </h4>
              <p className="text-gray-400">The main page of this social media </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
              <h4 className="text-xl font-semibold mb-2">Explore</h4>
              <p className="text-gray-400">Explore what other user has uploaded</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
              <h4 className="text-xl font-semibold mb-2">Create post </h4>
              <p className="text-gray-400">Create your post!!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat; 
