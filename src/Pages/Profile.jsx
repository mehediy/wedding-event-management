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
          <button
            onClick={() => document.getElementById("deleteModal").showModal()}
            className="btn btn-warning mt-4"
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <dialog id="deleteModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center pb-6">Are you sure?</h3>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-warning" onClick={deleteHandler}>
              Delete
            </button>
            <form method="dialog">
              <button className="btn">Cancel</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Profile;
