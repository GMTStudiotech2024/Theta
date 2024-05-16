import { GridPostList, Loader } from "@/components/shared";
import { useGetCurrentUser } from "@/lib/react-query/queries";

const LikedPosts = () => {
  const { data: currentUser } = useGetCurrentUser();

  if (!currentUser)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );

  return (
    <>
      {currentUser.liked.length === 0 && (
        <p className="text-rose-700">No liked posts沒有喜愛的貼文</p>
      )}

      <GridPostList posts={currentUser.liked} showStats={false} />
    </>
  );
};

export default LikedPosts;
