import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import GetStarted from "./GetStarted";
import { decodeToken } from "react-jwt";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import filterChar from "../store/filterChar";

function Appbar() {
  const [username, setUsername] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const setFilterChar = useSetRecoilState(filterChar);
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

  const navigate = useNavigate();
  return (
    <div className="w-full h-12 border-b-2 flex justify-between items-center px-5 fixed bg-white">
      <div className="flex w-1/2 gap-5 h-full justify-start items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Medium_logo_Wordmark_Black.svg/1280px-Medium_logo_Wordmark_Black.svg.png"
          alt=""
          className="h-6 w-28"
          onClick={() => {
            navigate("/");
            window.location.reload()
          }}
        />
        <div className=" bg-zinc-100 w-1/3 h-4/5 rounded-full flex justify-center items-center gap-3">
          <i className="ri-search-line text-2xl text-zinc-600 font-thin"></i>
          <input
            type="text"
            className="bg-transparent text-sm font-thin border-none focus-within:no-underline outline-none"
            placeholder="Search"
            onChange={(e) => {
              setFilterChar(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="w-1/2 h-full gap-8 flex justify-end items-center">
        <div
          className="flex gap-1 justify-center items-center text-zinc-600 hover:text-zinc-900 cursor-pointer"
          onClick={() => {
            navigate("/create");
          }}
        >
          <i className="ri-edit-line text-2xl"></i>
          <h1>Create</h1>
        </div>
        <i className="ri-notification-3-fill text-3xl text-zinc-700 hover:text-zinc-900 select-none"></i>
        {username ? (
          <div
            className="flex gap-1 relative cursor-pointer"
            onClick={() => {
              setShowDropDown(prev=>(!prev))
              console.log(showDropDown);
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
        ) : (
          <GetStarted />
        )}
      </div>
    </div>
  );
}

export default Appbar;
