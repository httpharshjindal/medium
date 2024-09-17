import BlogCard from "../components/BlogCard";
import useBlogs from "../hooks/useBlogs";
import Me from "../hooks/Me";
import { useRecoilValue } from "recoil";
import filterChar from "../store/filterChar";
import { BlogCardSkeleton } from "../components/BlogCardSkeleton";

function Blogs() {
  Me();
  const { loading, blogAtom } = useBlogs();
  const filterCharAtom = useRecoilValue(filterChar);

  const filteredPosts = blogAtom.filter((post: any) => {
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


  if (loading) {
    return <div className="flex w-full flex-col justify-center items-center pt-10" >
      <BlogCardSkeleton/>
      <BlogCardSkeleton/>
      <BlogCardSkeleton/>
      <BlogCardSkeleton/>
    </div>
  }
  return (
    <div className="flex w-full h-screen flex-col justify-center items-center pt-20">
      {filteredPosts.length > 0
        ? filteredPosts.map((elem) => {
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
        : "No Post Found"}
    </div>
  );
}

export default Blogs;
