import {
  SigninBody,
  SignupBody,
} from "@httpharshjindal/medium-common-package-updated";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Auth({ type }: { type: "signup" | "signin" }) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {type == "signup" ? <SignupForm /> : <SigninForm />}
    </div>
  );
}

const SignupForm = () => {
  const backendUrl = import.meta.env.VITE_DATABASE_URL
  const navigate = useNavigate();
  const [postinputs, setPostinputs] = useState<SignupBody>({
    name: "",
    email: "",
    password: "",
  });
  async function postRequest() {
    if (
      postinputs.email == "" ||
      postinputs.password == ""
    ) {
      alert("fields can not be empty");
    }
    try {
      const res = await axios.post(
        `${backendUrl}/api/v1/user/signup`,
        postinputs
      );
      if (res) {
        if(res.data.jwt){
          const jwt = res.data.jwt;
          localStorage.setItem(`token`, `Bearer ${jwt}`);
          navigate("/");
          window.location.reload()
        }
        else if(res.status == 403){
          alert(res.data.msg)
          navigate("/signin")
          return
        }
      }
    } catch (e: any) {
      alert(e.response.data);
    }
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8">
      <div className="flex h-full w-full flex-col justify-center items-center ">
        <h1 className=" font-bold text-3xl ">Create an Account</h1>
        <p className="text-md">
          Already have an account?
          <span
            className="underline hover:text-zinc-700 cursor-pointer"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Login
          </span>
        </p>
      </div>
      <form action="" className="flex flex-col w-5/6">
        <InputAndLabel
          label="Username"
          placeholder="Please enter your name (Optional)" 
          type="text"
          onChange={(e) => {
            setPostinputs((prev) => ({ ...prev, name: e.target.value }));
          }}
        />

        <InputAndLabel
          label="Email"
          placeholder="example@gmail.com"
          type="email"
          onChange={(e) => {
            setPostinputs((prev) => ({ ...prev, email: e.target.value }));
          }}
        />

        <InputAndLabel
          label="Password"
          placeholder="Atleast 8 characher"
          type="password"
          onChange={(e) => {
            setPostinputs((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
        />
      </form>

      <button
        className="w-5/6 py-1 bg-zinc-900 text-white rounded-md "
        onClick={() => {
          postRequest();
        }}
      >
        Signup
      </button>
    </div>
  );
};

const SigninForm = () => {
  const backendUrl = import.meta.env.VITE_DATABASE_URL
  const navigate = useNavigate();
  const [postinputs, setPostinputs] = useState<SigninBody>({
    email: "",
    password: "",
  });

  async function postRequest() {
    if (postinputs.email == "" || postinputs.password == "") {
      alert("fiels can not be empty");
      return;
    } else if (postinputs.password.length < 6) {
      alert("password length is too short");
      return;
    }
    try {
      const res = await axios.post(
        `${backendUrl}/api/v1/user/signin`,
        postinputs
      );
      if (res.data.token) {
        const jwt = res.data.token;
        localStorage.setItem(`token`, `Bearer ${jwt}`);
        navigate("/");
        window.location.reload()
      }
    } catch (e: any) {
      alert(e.response.data.msg)
    }
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col justify-center items-center ">
        <h1 className=" font-bold text-3xl ">Log In</h1>
        <p className="text-md">
          Dont have an account?{" "}
          <span
            className="underline hover:text-zinc-700 cursor-pointer"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </span>
        </p>
      </div>

      <form action="" className="flex flex-col w-5/6">
        <InputAndLabel
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          onChange={(e) => {
            setPostinputs((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <InputAndLabel
          label="password"
          type="password"
          placeholder="Atleast 8 characters"
          onChange={(e) => {
            setPostinputs((prev) => ({ ...prev, password: e.target.value }));
          }}
        />
      </form>
      <button
        className="w-5/6 py-1 bg-zinc-900 text-white rounded-md"
        onClick={() => {
          postRequest();
        }}
      >
        Signin
      </button>
    </div>
  );
};

interface LabelInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

const InputAndLabel = ({
  label,
  placeholder,
  onChange,
  type,
}: LabelInputType) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold" htmlFor="password">
        {label}
      </label>
      <input
        className="outline-none px-5 py-1 border mb-5 mt-1"
        type={type}
        name={label}
        id={label}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Auth;
