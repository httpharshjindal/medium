import { useEffect, useState } from "react";
import axios from "axios";
import BlogArr from "../store/BlogArr";
import { useRecoilState } from "recoil";

const useBlogs = () => {
  const backendUrl = import.meta.env.VITE_DATABASE_URL;
  const [loading, setLoading] = useState(true);
  const [blogAtom, setBlogAtom] = useRecoilState(BlogArr);
  const [error, setError] = useState("");
  useEffect(() => {
    try {
      setLoading(false);
      axios
        .get(`${backendUrl}/api/v1/blog/bulk`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setError(res.data.msg);
          if (res.data.posts) {
            setBlogAtom(res.data.posts);
          }
        });
    } catch (e) {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    blogAtom,
    error,
  };
};

export default useBlogs;
