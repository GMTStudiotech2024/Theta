
import { Link } from 'react-router-dom';

interface ChatProps {
  chat?: string;
  errorCode?: number;
  errorMessage?: string;
}

const Chat: React.FC<ChatProps> = ({ chat, errorCode = 404, errorMessage = 'Page Not Found' }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-9xl font-bold text-gray-800">{errorCode}</h1>
        <h2 className="text-4xl font-semibold text-gray-700 mt-4">{errorMessage}</h2>
        <p className="text-lg text-gray-600 mt-4">
          The page you were looking for does not exist or has been removed.
        </p>
        {chat && (
          <p className="text-base text-gray-500 mt-2">
            You were looking for: <span className="font-semibold">{chat}</span>
          </p>
        )}
        <div className="mt-8 flex flex-col space-y-4">
          <Link
            to="/"
            className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300 text-center"
          >
            Go to Home Page
          </Link>
          <button
            className="px-6 py-3 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors duration-300 text-center"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat ;