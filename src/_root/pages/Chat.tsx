import { Link } from 'react-router-dom';
import { FaCommentDots, FaShareSquare, FaUserFriends } from 'react-icons/fa';

export const Chat = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
      <div className="w-full bg-red-600 text-yellow-100 p-4 text-center shadow-lg">
        <p className="font-semibold">Requires signing up for a new account, different from the Theta social media platform.</p>
        <p className="font-semibold">此聊天軟體需要另外註冊新帳號，無法與現有帳號連結。</p>
        <p className="font-semibold">⚠️ The app is now in development, it is not available by now</p>
        <p className="font-semibold">此軟體目前為開發階段，無開放使用</p>
      </div>

      <header className="w-full text-center py-20 bg-gradient-to-r from-blue-500 to-teal-500">
        <h1 className="text-7xl font-extrabold mb-8 text-white tracking-wide">Experience Theta-Chat</h1>
        <h1 className="text-7xl font-extrabold mb-8 text-white tracking-wide">體驗Theta Chat</h1>
        <p className="text-4xl text-gray-200">Connect. Communicate. Collaborate.</p>
        <p className="text-4xl text-gray-200">通訊、連結、合作</p>
      </header>

      <main className="flex flex-col items-center py-20 space-y-20 w-full max-w-7xl px-10">
        <section className="text-center max-w-5xl">
          <p className="text-3xl mb-10">Theta-Chat is a cutting-edge chat application designed to provide real-time messaging capabilities for you and your friends. Experience seamless communication like never before.</p>
          <p className="text-3xl mb-10">Theta Chat是一個可以與朋友聊天的軟體！</p>
          <div className="flex justify-center space-x-8">
            <Link to="/login" className="px-10 py-5 bg-pink-600 text-white rounded-full hover:bg-pink-400 transition duration-300 font-semibold flex items-center shadow-lg">
              <FaCommentDots className="mr-3 text-2xl" />
              Not available 未開放
            </Link>
            <a href="https://www.example.com" className="px-10 py-5 bg-gray-700 text-white rounded-full hover:bg-gray-500 transition duration-300 font-semibold flex items-center shadow-lg">
              Learn more 更多
            </a>
          </div>
        </section>

        <section className="text-center max-w-6xl">
          <h2 className="text-6xl font-extrabold mb-16 text-white">Features 功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="p-12 bg-gray-800 rounded-xl shadow-2xl flex flex-col items-center hover:bg-gray-700 transition duration-300">
              <FaCommentDots className="text-6xl mb-6 text-pink-500" />
              <h3 className="text-5xl font-semibold mb-8">Real-Time Messaging 同時間訊息</h3>
              <p className="text-lg">Experience instant communication with friends and colleagues. 體驗訊息傳遞的快速！</p>
            </div>
            <div className="p-12 bg-gray-800 rounded-xl shadow-2xl flex flex-col items-center hover:bg-gray-700 transition duration-300">
              <FaShareSquare className="text-6xl mb-6 text-pink-500" />
              <h3 className="text-5xl font-semibold mb-8">Chat User Interface 使用者介面</h3>
              <p className="text-lg">With a well-designed User Interface, you will experience great conversations with your friends! 對使用者友善的介面</p>
            </div>
            <div className="p-12 bg-gray-800 rounded-xl shadow-2xl flex flex-col items-center hover:bg-gray-700 transition duration-300">
              <FaUserFriends className="text-6xl mb-6 text-pink-500" />
              <h3 className="text-5xl font-semibold mb-8">Group Chats 群聊</h3>
              <p className="text-lg">Create and manage group chats for various purposes. Collaborate with teams, friends, or family. 群組聊天室！</p>
            </div>
          </div>
        </section>

        <section className="text-center max-w-5xl">
          <h2 className="text-6xl font-extrabold mb-10 text-white">Get Started 開始使用？</h2>
          <p className="text-3xl mb-12">⚠️ The app now is not available 此軟體未開放</p>
          <Link to="/register" className="px-12 py-6 bg-pink-600 text-white rounded-full hover:bg-pink-400 transition duration-300 font-semibold flex items-center justify-center shadow-lg">
            <FaUserFriends className="mr-4 text-2xl" />
            Not available 未開放
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
