import { useParams } from "react-router-dom";
import useBlog from "../hooks/useBlog";
import Avatar from "../components/Avatar";
import Loading from "../components/Loading";
import Me from "../hooks/Me";
import { Appbar } from "../components/Appbar";

function Blog() {
  Me();
  const { id } = useParams();
  const { loading, currentBlog } = useBlog(id);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-full m-auto h-full">
      <Appbar />
      <div className="  flex-col w-full p-1 sm:flex-row flex sm:w-4/5 m-auto sm:pt-5">
        <div className="w-full p-2">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">
            {currentBlog?.title}
          </h1>
          <p className="text-sm font-medium text-zinc-600 text-wrap">
            Published On 12-10-2023
          </p>
          <div className=" text-xs sm:text-lg border-b-2">{currentBlog?.content}</div>
        </div>
        <div className="w-full sm:w-2/6 h-full border-l p-3">
          <h1 className="text-lg font-semibold">Author</h1>
          <div>
            <div className="flex gap-1 items-center w-full">
              <div className="w-10">
                <Avatar username={currentBlog?.author.name || "A"} />
              </div>
              <div className="w-full">
                <h2>{currentBlog?.author.name || "anonymous"}</h2>
              </div>
            </div>
            <h3>{currentBlog?.author.email || ""}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
