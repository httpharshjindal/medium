import { Appbar } from "../components/Appbar";
import Auth from "../components/Auth";
import Quote from "../components/Quote";

function Signup() {
  return (
    <div>
      <Appbar
        showAddPost={false}
        showSearchBar={false}
        showPublish={false}
        showAvatar={false}
      />
      <div className="sm:flex w-full h-full justify-center items-center py-5">
        <Auth type="signup" />
        <Quote />
      </div>
    </div>
  );
}

export default Signup;
