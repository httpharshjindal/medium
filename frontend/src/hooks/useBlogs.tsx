import { useEffect, useState } from "react";
import axios from "axios";



const useBlogs = () => {
  const backendUrl = import.meta.env.VITE_DATABASE_URL;
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
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
          if (res.data.posts) {
            setPosts(res.data.posts);
          }
        });
    } catch (e) {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    posts,
  };
};

export default useBlogs;
