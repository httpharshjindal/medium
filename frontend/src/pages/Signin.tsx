import { Appbar } from "../components/Appbar";
import Auth from "../components/Auth";
import Quote from "../components/Quote";

function Signin() {
  return (
    <div>
      <Appbar
        showAddPost={false}
        showSearchBar={false}
        showPublish={false}
        showAvatar={false}
      />
      <div className="sm:flex w-full h-full justify-center items-center">
        <Auth type="signin" />
        <Quote />
      </div>
    </div>
  );
}

export default Signin;
