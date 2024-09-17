import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import currentBlogAtom from "../store/currentBlogAtom";

function useBlog(id: string | undefined) {
  const backendUrl = import.meta.env.VITE_DATABASE_URL;
  const [loading, setLoading] = useState(true);
  const [currentBlog, setCurrentBlog] = useRecoilState(currentBlogAtom);
  useEffect(() => {
    axios
      .get(`${backendUrl}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setLoading(false);
        if (res.data.res) {
          setCurrentBlog(res.data.res);
        }
      });
  }, [id]);

  return {
    loading,
    currentBlog,
  };
}

export default useBlog;
