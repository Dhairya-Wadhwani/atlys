import PostCard from "./PostCard";
import Women from "../assets/women.png"
import Men from "../assets/man.jpeg";

const Home = () => {
  const posts = [
    {
      id: null,
      userName: "Create post",
      description: "How are you feeling today?",
      reaction: "💬",
    },
    {
      id: "1234",
      userName: "Theresa Webb",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      reaction: "👋",
      time: "5mins ago",
      isEdited: false,
      totalComments: 24,
      profileImage: Women,
    },
    {
      id: "5678",
      userName: "Marvin McKinney",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      reaction: "😔",
      time: "8mins ago",
      isEdited: true,
      totalComments: 45,
      profileImage: Men,
    },
  ];

  return (
    <>
      <div className="py-20 px-5 flex flex-col sm:w-[45%] w-[90%] m-auto">
        <p className="text-4xl text-gray-300">Hello Jane</p>
        <p className="text-darkGray mt-5">
          How are you doing today? Would you like to share something with the{" "}
          <br />
          community 🤗
        </p>

        {posts.map((post) => {
          return (
            <div key={post.id ?? "default"}>
              <PostCard post={post} isPostDialog={post.id === null} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
