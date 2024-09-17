import { useNavigate } from "react-router-dom";

function GetStarted(){
    const navigate = useNavigate()
  return (
    <div
      className="bg-green-300 px-3 py-2 rounded-full text-sm cursor-pointer"
      onClick={() => {
        navigate("/signup");
      }}
    >
      Get Started
    </div>
  );
};

export default GetStarted