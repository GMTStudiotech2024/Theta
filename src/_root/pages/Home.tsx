import { Models } from "appwrite";
// import { useToast } from "@/components/ui/use-toast";
import { Loader, PostCard, UserCard } from "@/components/shared";

import { useGetRecentPosts, useGetUsers } from "@/lib/react-query/queries";

const Home = () => {
  // const { toast } = useToast();

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
