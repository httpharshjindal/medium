import Auth from "../components/Auth";
import Quote from "../components/Quote";

function Signup() {

  return (
    <div className="w-full h-screen flex">
      <Auth type="signup"/>
      <Quote />
    </div>
  );
}

export default Signup;
