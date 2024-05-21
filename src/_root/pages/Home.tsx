import { useState, useEffect } from "react";
import { Models } from "appwrite";
import { Loader, PostCard, UserCard } from "@/components/shared";
import { useGetRecentPosts, useGetUsers } from "@/lib/react-query/queries";
import { AlertDemo } from "@/components/ui/alert";

const Home = () => {
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsFullWidth(window.innerWidth >= 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const {
    data: posts,
    isLoading: isPostLoading,
    isError: isErrorPosts,
    refetch: refetchPosts,
  } = useGetRecentPosts();

  const {
    data: creators,
    isLoading: isUserLoading,
    isError: isErrorCreators,
    refetch: refetchCreators,
  } = useGetUsers(10);

  const handleRetry = () => {
    refetchPosts();
    refetchCreators();
  };

  if (isErrorPosts || isErrorCreators) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="text-center">
            <p className="text-lg text-red-500 mb-2">Something happened here, maybe your internet has some problem 😐</p>
            <p className="text-lg text-red-500">發生問題，請檢察網路連線 😐</p>
            <button
                onClick={handleRetry}
                className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Retry 重試
            </button>
          </div>
        </div>
    );
  }

  return (
      <div className="flex flex-col lg:flex-row flex-1 min-h-screen p-4">
        {isFullWidth && showAlert && (
            <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
              <div className="relative bg-white shadow-lg rounded-lg animate-fade-in">
                <AlertDemo />
                <button
                    className="absolute top-2 right-2 text-xl text-gray-700 hover:text-gray-900 focus:outline-none"
                    onClick={() => setShowAlert(false)}
                    aria-label="Close Alert"
                >
                  &times;
                </button>
              </div>
            </div>
        )}

        <div className="home-container flex-1 p-4">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">Home Page 主頁🏘️</h2>
          {isPostLoading ? (
              <Loader />
          ) : (
              <ul className="space-y-9">
                {posts?.documents.map((post: Models.Document) => (
                    <li key={post.$id} className="flex justify-center">
                      <PostCard post={post} />
                    </li>
                ))}
              </ul>
          )}
        </div>

        <div className="home-creators bg-gradient-to-br from-[#c22Ed0] to-[#120632] p-4 lg:w-1/3">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Trend Creator熱門用戶</h3>
          {isUserLoading ? (
              <Loader />
          ) : (
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                {creators?.documents.map((creator) => (
                    <li key={creator.$id}>
                      <UserCard user={creator} />
                    </li>
                ))}
              </ul>
          )}
        </div>
      </div>
  );
};

export default Home;
