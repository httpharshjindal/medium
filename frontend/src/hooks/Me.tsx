import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Me() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signup");
    }
  }, []);
}


export default Me