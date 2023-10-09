import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password should have at least 1 uppercase letter");
      return;
    } else if (!/[~!@#$%^^&*()_+]/.test(password)) {
      setRegisterError("Password should have at least 1 special character");
      return;
    }

    createUser(email, password)
      .then((res) => {
        toast.success("Account created successfully");
        navigate("/");
      })
      .catch((error) => toast.error(error.code));
  };
  return (
    <div className="container mx-auto">
      <div className="flex items-center flex-col gap-4 py-12">
        <h2 className="font-bold text-xl">Create an account</h2>
        <form className="flex flex-col gap-2" onSubmit={registerHandler}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="input input-bordered w-full max-w-xs focus:outline-none focus:border-primary"
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
              className="input input-bordered w-full max-w-xs focus:outline-none focus:border-primary"
              required
            />
            {/* <label className="label">
              <span className="label-text-alt">Bottom Left label</span>
            </label> */}
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-red-800 max-w-[16rem]">
              {registerError}
            </span>
            <button type="submit" className="btn btn-primary w-full my-2">
              Register
            </button>
            <span className="text-center text-sm">
              <Link to={"/login"}>Have an account? Login!</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
