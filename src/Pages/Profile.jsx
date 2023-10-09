import { getAuth, deleteUser } from "firebase/auth";
import app from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

const Profile = () => {
  const auth = getAuth(app);
  const user = auth.currentUser;
  //   console.log(user);

  const deleteHandler = () => {
    deleteUser(user)
      .then(() => toast("User Deleted"))
      .catch((error) => toast.error(error.code));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 min-h-[80vh]">
      <div>
        <h1 className="text-center text-xl font-semibold mb-4">User Profile</h1>
        <div>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <button onClick={deleteHandler} className="btn btn-warning mt-4">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
