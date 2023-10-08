import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const registerHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    createUser(email, password)
      .then((res) => console.log(res.user))
      .catch((error) => console.error(error));
  };
  return (
    <div className="container mx-auto">
      <div className="flex items-center flex-col gap-4 py-12">
        <h2 className="font-bold text-xl">Create an account</h2>
        <form className="flex flex-col gap-2" onSubmit={registerHandler}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered w-full max-w-xs"
            />
            {/* <label className="label">
              <span className="label-text-alt">Bottom Left label</span>
            </label> */}
          </div>
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
          <div className="flex flex-col">
            <button type="submit" className="btn w-full my-2">
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
