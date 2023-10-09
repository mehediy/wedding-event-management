import { getAuth, deleteUser, updateProfile } from "firebase/auth";
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

  const updateHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
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
          <div className="flex flex-col gap-2">
            {/* Update profile */}
            <form
              className="flex gap-2 items-start flex-col"
              onSubmit={updateHandler}
            >
              <div className="flex gap-2 items-center">
                {(user.photoURL && (
                  <img
                    className="h-full w-36 rounded-full"
                    src={user.photoURL}
                  />
                )) || (
                  <>
                    <p>Photo: </p>
                    <input
                      type="text"
                      className="input input-bordered w-full max-w-xs focus:outline-none focus:border-primary"
                      name="photo"
                      placeholder="Photo url"
                    />
                  </>
                )}
              </div>

              <div className="flex gap-2 items-center">
                <p>Name: </p>
                {user.displayName || (
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs focus:outline-none focus:border-primary"
                    name="name"
                    placeholder="Full name"
                    required
                  />
                )}
              </div>

              <p>Email: {user.email}</p>

              {!(user.displayName && user.photoURL) && (
                <button className="btn btn-primary" type="submit">
                  Update
                </button>
              )}
            </form>
          </div>
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
