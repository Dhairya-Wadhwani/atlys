import { useState } from "react";
import Button from "./atoms/Button";
import Signup from "./Signup";
import Message from "../assets/message.png"

interface Post {
  id: string | null;
  userName: string;
  description: string;
  reaction: string;
  time?: string;
  isEdited?: boolean;
  totalComments?: number;
  profileImage?: string;
}

interface PostProps {
  post: Post;
  isPostDialog?: boolean;
}

const PostCard = ({ post, isPostDialog = false }: PostProps) => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      {" "}
      <div
        className="bg-mainGray border border-gray-700 p-6 mt-10 rounded-lg cursor-pointer"
        onClick={() => {
          setShowSignup(true);
        }}
      >
        <div className="flex gap-3">
          {!isPostDialog && (
            <img src={post.profileImage} className="w-12 h-12 rounded-[50%]" />
          )}
          <div className="relative w-full">
            <p className="text-gray-300 text-lg"> {post.userName}</p>
            <p className="text-darkGray">{post.time}</p>
            {!isPostDialog && (
              <p className="text-gray-300 text-4xl absolute top-0 right-0 cursor-pointer">
                &#x2026;
              </p>
            )}
          </div>
        </div>
        <div className="bg-[#131318] p-4 flex gap-3 mt-5 rounded-lg items-center">
          <div className="w-12 h-12 rounded-[50%] flex justify-center items-center bg-mainGray">
            {post.reaction}
          </div>
          <p className="text-darkGray flex-1">{post.description}</p>
        </div>
        {isPostDialog && (
          <div className="flex justify-end">
            <Button
              text="Post"
              style="w-[100px] rounded mt-5 py-2 text-white"
              onClick={() => {}}
            />
          </div>
        )}
        {!isPostDialog && (
          <span className="inline-flex items-center text-darkGray mt-4">
            {" "}
            <img
              src={Message}
              className="align-middle mr-3 h-5 w-5"
            />{" "}
            {post.totalComments} comments{" "}
          </span>
        )}
      </div>
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </>
  );
};

export default PostCard;
