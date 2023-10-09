import { getAuth, deleteUser, updateProfile } from "firebase/auth";
import app from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = getAuth(app);
  const user = auth.currentUser;
  const navigate = useNavigate();
  //   console.log(user);

  const deleteHandler = () => {
    deleteUser(user)
      .then(() => toast("User Deleted"))
      .catch((error) => toast.error(error.code));
  };

  const updateHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        window.location.reload(false);
        // toast.success("Name updated successfully");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 min-h-[80vh]">
      <div>
        <h1 className="text-center text-xl font-semibold mb-4">User Profile</h1>
        <div>
          <div className="flex gap-2 items-center">
            <p>Name: </p>
            {user.displayName || (
              // Set full name
              <form
                className="flex gap-2 items-center"
                onSubmit={updateHandler}
              >
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs focus:outline-none focus:border-primary"
                  name="name"
                  placeholder="Full name"
                />
                <button className="btn btn-primary" type="submit">
                  Set
                </button>
              </form>
            )}
          </div>
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
