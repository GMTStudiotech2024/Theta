import { Link } from 'react-router-dom';

export const Chat = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full bg-yellow-200 text-yellow-800 p-4 text-center">
        <p className="font-semibold">Requires signing up for a new account, different from the Theta social media platform.</p>
      </div>

      <header className="w-full text-center py-6 bg-blue-600 text-white">
        <h1 className="text-5xl font-bold">Welcome to Theta-Chat</h1>
        <p className="text-2xl mt-2">Connect. Communicate. Collaborate.</p>
      </header>
      
      <main className="flex flex-col items-center py-10 space-y-10 w-full max-w-4xl">
        <section className="text-center">
          <p className="text-xl mb-6">Theta-Chat is a cutting-edge chat application designed to provide real-time messaging capabilities for you and your friends.</p>
          <div className="flex space-x-4">
            <Link to="/login" className="text-blue-500 underline">Login</Link>
            <a href="https://www.example.com" className="text-blue-500 underline">Learn More</a>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Real-Time Messaging</h3>
              <p>Experience instant communication with friends and colleagues.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Media Sharing</h3>
              <p>Share photos, videos, and documents effortlessly.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Group Chats</h3>
              <p>Create and manage group chats for various purposes.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started</h2>
          <p className="text-xl mb-6">Sign up now and join the Theta-Chat community!</p>
          <Link to="/register" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">Register Now</Link>
        </section>
      </main>
      
      <footer className="w-full text-center py-4 bg-gray-200">
        <p>&copy; 2024 Theta-Chat. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Chat;