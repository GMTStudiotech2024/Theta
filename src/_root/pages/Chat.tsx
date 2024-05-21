import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCommentDots, FaShareSquare, FaUserFriends } from 'react-icons/fa';

export const Chat = () => {
  const [messages, setMessages] = useState<string[]>([
    "Hello! How can I help you today?",
    "I have a question about my order."
  ]);
  const [newMessage, setNewMessage] = useState<string>('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="flex items-center justify-between bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-xl">Chat with Us</h1>
        <div className="flex items-center space-x-4">
          <Link to="/friends">
            <FaUserFriends size={24} />
          </Link>
          <Link to="/share">
            <FaShareSquare size={24} />
          </Link>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-blue-500 text-white self-start' : 'bg-gray-200 text-black self-end'}`}
            >
              {message}
            </div>
          ))}
        </div>
      </main>

      <footer className="flex items-center p-4 bg-white shadow-md">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message"
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="ml-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <FaCommentDots size={24} />
        </button>
      </footer>
    </div>
  );
};

export default Chat;
