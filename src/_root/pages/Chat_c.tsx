import { Link } from 'react-router-dom';
import { FaCommentDots, FaShareSquare, FaUserFriends } from 'react-icons/fa';

export const Chat_c = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
      <div className="w-full bg-red text-yellow-100 p-4 text-center">
        <p className="font-semibold">此聊天軟體需要另外註冊新帳號，無法與現有帳號連結。</p>
        <p className="font-semibold">⚠️ 此軟體目前為開發階段，無開放使用</p>
      </div>

      <header className="w-full text-center py-20 bg-gradient-to-r from-sky-300 to-sky-600">
        <h1 className="text-7xl font-bold mb-8 ">體驗Theta Chat</h1>
        <p className="text-4xl">通訊、連結、合作</p>
      </header>

      <main className="flex flex-col items-center py-20 space-y-20 w-full max-w-7xl px-10">
        <section className="text-center max-w-5xl">
          <p className="text-3xl mb-10">Theta Chat是一個可以與朋友聊天的軟體！</p>
          <div className="flex justify-center space-x-8">
            <Link to="/login" className="px-10 py-5 bg-rose-700 text-white rounded-full hover:bg-rose-400 transition duration-300 font-semibold flex items-center">
              <FaCommentDots className="mr-3" />
            未開放
            </Link>
            <a href="https://www.example.com" className="px-10 py-5 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition duration-300 font-semibold flex items-center">
            知道更多
            </a>
          </div>
        </section>

        <section className="text-center max-w-6xl">
          <h2 className="text-6xl font-bold mb-16">功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="p-12 bg-gray-800 rounded-xl shadow-lg flex flex-col items-center">
              <FaCommentDots className="text-5xl mb-6" />
              <h3 className="text-5xl font-semibold mb-8">同時間訊息</h3>
              <p className="text-lg">體驗訊息傳遞的快速！</p>
            </div>
            <div className="p-12 bg-gray-800 rounded-xl shadow-lg flex flex-col items-center">
              <FaShareSquare className="text-5xl mb-6" />
              <h3 className="text-5xl font-semibold mb-8">使用者介面</h3>
              <p className="text-lg">對使用者友善的介面</p>
            </div>
            <div className="p-12 bg-gray-800 rounded-xl shadow-lg flex flex-col items-center">
              <FaUserFriends className="text-5xl mb-6" />
              <h3 className="text-5xl font-semibold mb-8">群聊</h3>
              <p className="text-lg">群組聊天室！</p>
            </div>
          </div>
        </section>

        <section className="text-center max-w-5xl">
          <h2 className="text-6xl font-bold mb-10">開始使用？</h2>
          <p className="text-3xl mb-12">⚠️ 此軟體未開放</p>
          <Link to="/register" className="px-12 py-6 bg-rose-700 text-white rounded-full hover:bg-rose-400 transition duration-300 font-semibold flex items-center justify-center">
            <FaUserFriends className="mr-4" />
            未開放
          </Link>
        </section>
      </main>

      <footer className="w-full text-center py-12 bg-gray-900">
        <p>&copy; 2024 Theta-Chat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Chat_c;
