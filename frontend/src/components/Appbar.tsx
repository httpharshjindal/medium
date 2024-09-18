import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { decodeToken } from "react-jwt";
import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import PostAdd from "../assets/PostAdd.svg";

interface AppbarProps {
  showSearchBar?: boolean;
  showPublish?: boolean;
  showAddPost?: boolean;
  showAvatar?: boolean;
  isPublishEnabled?: boolean; // New prop to control button state
  onPublish?: () => void; // New prop for publish button action
}

export const Appbar: React.FC<AppbarProps> = ({
  showSearchBar = true,
  showPublish = false,
  showAddPost = true,
  showAvatar = true,
  isPublishEnabled = false, // Add default value for isPublishEnabled
  onPublish, // Add onPublish function prop
}) => {
  const [username, setUsername] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const jwt = token.split(" ")[1];
        const user: any = decodeToken(jwt);
        setUsername(user.email);
      }
    } catch (e) {}
  }, []);
  return (
    <nav className=" w-full border-black border-b-2 flex justify-between px-5 py-3 items-center">
      <div className="flex items-center gap-5">
        <span className="w-28">
          <Link to={"/"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Medium_logo_Wordmark_Black.svg/1280px-Medium_logo_Wordmark_Black.svg.png"
              alt=""
            />
          </Link>
        </span>
        <div>{showSearchBar && <SearchBar />}</div>
      </div>
      <div className="flex items-center gap-5 pl-5">
        {showPublish && (
          <button
            onClick={isPublishEnabled ? onPublish : undefined}
            type="button"
            className={`flex justify-center text-white font-medium rounded-full text-sm px-5 py-2.5 text-center ${
              isPublishEnabled
                ? "bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Publish
          </button>
        )}
        <div className="w-12 gap-3 flex justify-center items-center">
          <div className="w-6">
            {showAddPost && (
              <Link to={"/create"}>
                <img className="cursor-pointer" src={PostAdd} alt="" />
              </Link>
            )}
          </div>
          {showAvatar && (
            <div
              className="w-5"
              onClick={() => {
                setShowDropDown((prev) => !prev);
              }}
            >
              <Avatar username={username} />
              <div
                className={` ${
                  showDropDown ? "visible" : "hidden"
                } absolute top-12 right-1 w-32 bg-white border select-none`}
              >
                <div
                  className="flex p-2 hover:bg-zinc-300  "
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();
                  }}
                >
                  <i className="ri-logout-box-line"></i>
                  <p>Logout</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
