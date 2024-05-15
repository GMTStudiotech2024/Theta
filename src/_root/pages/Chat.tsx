import { Link } from 'react-router-dom';
import { FaCommentDots, FaShareSquare, FaUserFriends } from 'react-icons/fa';

export const Chat = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
      <div className="w-full bg-red text-yellow-100 p-4 text-center">
        <p className="font-semibold">Requires signing up for a new account, different from the Theta social media platform.</p>
      </div>

      <header className="w-full text-center py-20 bg-gradient-to-r from-sky-300 to-sky-600">
        <h1 className="text-7xl font-bold mb-8 ">Welcome to Theta-Chat</h1>
        <p className="text-4xl">Connect. Communicate. Collaborate.</p>
      </header>

      <main className="flex flex-col items-center py-20 space-y-20 w-full max-w-7xl px-10">
        <section className="text-center max-w-5xl">
          <p className="text-3xl mb-10">Theta-Chat is a cutting-edge chat application designed to provide real-time messaging capabilities for you and your friends. Experience seamless communication like never before.</p>
          <div className="flex justify-center space-x-8">
            <Link to="/login" className="px-10 py-5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 font-semibold flex items-center">
              <FaCommentDots className="mr-3" />
              Login
            </Link>
            <a href="https://www.example.com" className="px-10 py-5 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition duration-300 font-semibold flex items-center">
              <FaShareSquare className="mr-3" />
              Learn More
            </a>
          </div>
        </section>

        <section className="text-center max-w-6xl">
          <h2 className="text-6xl font-bold mb-16">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="p-12 bg-gray-800 rounded-xl shadow-lg flex flex-col items-center">
              <FaCommentDots className="text-5xl mb-6" />
              <h3 className="text-5xl font-semibold mb-8">Real-Time Messaging</h3>
              <p className="text-lg">Experience instant communication with friends and colleagues. Stay connected and never miss a beat.</p>
            </div>
            <div className="p-12 bg-gray-800 rounded-xl shadow-lg flex flex-col items-center">
              <FaShareSquare className="text-5xl mb-6" />
              <h3 className="text-5xl font-semibold mb-8">Media Sharing</h3>
              <p className="text-lg">Share photos, videos, and documents effortlessly. Bring your conversations to life with rich media.</p>
            </div>
            <div className="p-12 bg-gray-800 rounded-xl shadow-lg flex flex-col items-center">
              <FaUserFriends className="text-5xl mb-6" />
              <h3 className="text-5xl font-semibold mb-8">Group Chats</h3>
              <p className="text-lg">Create and manage group chats for various purposes. Collaborate with teams, friends, or family.</p>
            </div>
          </div>
        </section>

        <section className="text-center max-w-5xl">
          <h2 className="text-6xl font-bold mb-10">Get Started</h2>
          <p className="text-3xl mb-12">Sign up now and join the Theta-Chat community! Unlock a world of seamless communication and collaboration.</p>
          <Link to="/register" className="px-12 py-6 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 font-semibold flex items-center justify-center">
            <FaUserFriends className="mr-4" />
            Register Now
          </Link>
        </section>
      </main>

      <footer className="w-full text-center py-12 bg-gray-900">
        <p>&copy; 2024 Theta-Chat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Chat;
