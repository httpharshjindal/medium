import BlogCard from "../components/BlogCard";
import useBlogs from "../hooks/useBlogs";
import Me from "../hooks/Me";
import { useRecoilValue } from "recoil";
import filterChar from "../store/filterChar";
import { BlogCardSkeleton } from "../components/BlogCardSkeleton";
import { Appbar } from "../components/Appbar";
interface Post {
  id: string;
  title: string;
  content: string;
}
function Blogs() {
  Me();
  const { loading, posts } = useBlogs();
  const filterCharAtom = useRecoilValue(filterChar);
  const filteredPosts = posts?.filter((post: Post) => {
    const title = post.title ? post.title.toLowerCase() : "";
    const content = post.content
      ? post.content.slice(0, 180).toLowerCase()
      : "";

    const searchWords = filterCharAtom.trim().split(/\s+/);
    // @ts-ignore
    return searchWords.some(
      (word) => title.includes(word) || content.includes(word)
    );
  });

  return (
    <div className="">
      <Appbar />
      <div className="flex flex-col w-full justify-center items-center">
        {loading && (
          <>
            <BlogCardSkeleton/>
            <BlogCardSkeleton/>
            <BlogCardSkeleton/>
            <BlogCardSkeleton/>
            <BlogCardSkeleton/>
          </>
        )}
        {filteredPosts.length > 0 ? (
          filteredPosts.map((elem:any) => {
            return (
              <BlogCard
                title={elem.title}
                content={elem.content}
                author={elem.author.name}
                date="12-2-2023"
                blogId={elem.id}
              />
            );
          })
        ) : (
          "No Posts Found"
        )}
      </div>
    </div>
  );
}

export default Blogs;
