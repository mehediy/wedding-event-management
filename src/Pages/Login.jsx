import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
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
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
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
            />
            {/* <label className="label">
              <span className="label-text-alt">Bottom Left label</span>
            </label> */}
          </div>
          <div className="flex flex-col text-sm">
            <button type="submit" className="btn w-full my-2">
              Login
            </button>
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
