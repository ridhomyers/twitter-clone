import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

import useUser from "@/hooks/useUser";

import PostFeed from "@/components/posts/PostFeed";
import Header from "@/components/Header";
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";

const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;
  const userIdNumber = Number(userId);

  const { data: fetchedUser, isLoading } = useUser(userIdNumber);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    );
  }

  return (
    <>
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero userId={userIdNumber} />
      <UserBio userId={userIdNumber} />
      <PostFeed userId={userIdNumber} />
    </>
  );
};

export default UserView;
