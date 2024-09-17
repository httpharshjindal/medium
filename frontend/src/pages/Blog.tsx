import { useParams } from "react-router-dom";
import useBlog from "../hooks/useBlog";
import Avatar from "../components/Avatar";
import Loading from "../components/Loading";
import Me from "../hooks/Me";

function Blog() {
  Me();
  const { id } = useParams();
  const { loading, currentBlog } = useBlog(id);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="flex p-5 w-4/5 m-auto pt-16 h-full">
      <div className="w-4/5 p-3">
        <h1 className="text-4xl font-bold mb-2">{currentBlog?.title}</h1>
        <p className="text-sm font-medium text-zinc-600">
          Published On 12-10-2023
        </p>
        <p>{currentBlog?.content}</p>
      </div>
      <div className="w-1/5 h-full border-l p-3">
        <h1 className="text-lg font-semibold">Author</h1>
        <div>
          <div className="flex gap-1 items-center">
            <Avatar username={currentBlog?.author.name || "A"} />
            <h2>{currentBlog?.author.name || "anonymous"}</h2>
          </div>
          <h3>{currentBlog?.author.email || ""}</h3>
        </div>
      </div>
    </div>
  );
}

export default Blog;
