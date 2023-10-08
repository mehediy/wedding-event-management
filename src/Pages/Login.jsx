import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { logIn, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    logIn(email, password)
      .then((res) => {
        // console.log(res.user)
        toast("Logged in successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => toast.error(error.code));
  };
  const googleLoginHandler = () => {
    googleLogin()
      .then((res) => {
        toast("Successfully logged in");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => toast(error.code));
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center flex-col gap-4 py-12">
        <h2 className="font-bold text-xl">Login</h2>
        <form className="flex flex-col gap-2" onSubmit={loginHandler}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="input input-bordered w-full max-w-xs"
              required
            />
            {/* <label className="label">
              <span className="label-text-alt">Bottom Left label</span>
            </label> */}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="input input-bordered w-full max-w-xs"
              required
            />
            {/* <label className="label">
              <span className="label-text-alt">Bottom Left label</span>
            </label> */}
          </div>
          <div className="flex flex-col text-sm">
            {/* {loginError && <span className="text-red-700">{loginError}</span>} */}
            <button type="submit" className="btn w-full my-2">
              Login
            </button>
            <a className="btn w-full my-2" onClick={googleLoginHandler}>
              Login with Google
            </a>
            <span className="text-center">
              <Link to={"/register"}>Don't have an account? Register!</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
