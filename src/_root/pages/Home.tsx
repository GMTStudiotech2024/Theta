import { useState, useEffect } from "react";
import { Models } from "appwrite";
import { Loader, PostCard, UserCard } from "@/components/shared";
import { useGetRecentPosts, useGetUsers } from "@/lib/react-query/queries";
import { AlertDemo } from "@/components/ui/alert";

const Home = () => {
  const [isFullWidth, setIsFullWidth] = useState(false);
  const [showAlert, setShowAlert] = useState(true); // New state variable for alert visibility

  useEffect(() => {
    const handleResize = () => {
      setIsFullWidth(window.innerWidth >= 1280); // Example width, you can adjust this value
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect to hide the alert after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const {
    data: posts,
    isLoading: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();
  const {
    data: creators,
    isLoading: isUserLoading,
    isError: isErrorCreators,
  } = useGetUsers(10);

  if (isErrorPosts || isErrorCreators) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-fuchsia-500">Something happened here, maybe your internet has some problem 😐</p>
          <p className="body-medium text-fuchsia-500">發生問題，請檢察網路連線 😐</p>
        </div>
        <div className="home-creators">
          <p className="body-medium text-fuchsia-500">Something happened here, maybe your internet has some problem 😐</p>
          <p className="body-medium text-fuchsia-500">發生問題，請檢察網路連線 😐</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1">
      <div className="relative">
      {isFullWidth && showAlert && ( // Conditionally render the alert based on showAlert state
        <div className="fixed top-4 left-1/2 w-1/2 transform -translate-x-1/2 z-50 ">
          <AlertDemo />
        </div>)}
      </div>
      
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full text-yellow-400">Home Page 主頁🏘️</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full ">
              {posts?.documents.map((post: Models.Document) => (
                <li key={post.$id} className="flex justify-center w-full ">
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="home-creators bg-gradient from-sky-200 to-sky-500">
        <h3 className="h3-bold text-yellow-400">Trend creator熱門用戶</h3>
        {isUserLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="grid 2xl:grid-cols-2 gap-6">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id}>
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
