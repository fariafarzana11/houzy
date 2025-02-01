import React, { useContext, useState, useEffect } from "react";
import { authContext } from "../../Providers/AuthProviders";
import { updateProfile, getAuth } from "firebase/auth";
import { toast } from "react-toastify";

const Profile = () => {
    const { user, setUser } = useContext(authContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    useEffect(() => {
        if (!user) {
            const auth = getAuth();
            const currentUser = auth.currentUser;
            setUser(currentUser);
        }
    }, [user, setUser]);

    const handleUpdate = async () => {
        if (!user) return;

        try {
            const auth = getAuth();
            const firebaseUser = auth.currentUser;

            if (firebaseUser) {
                await updateProfile(firebaseUser, { displayName: name, photoURL });
                setUser({ ...firebaseUser, displayName: name, photoURL });
                toast.success("Profile updated successfully!");
            } else {
                toast.error("No valid user found.");
            }
        } catch (error) {
            toast.error("Failed to update profile");
            console.error(error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="bg-gray-800 shadow-md rounded-lg p-8 w-96 text-white">
                <h2 className="text-2xl font-bold text-center mb-5">Profile</h2>

                <div className="flex flex-col items-center">
                    <img
                        src={photoURL || "https://via.placeholder.com/150"}
                        alt="Profile"
                        className="w-24 h-24 rounded-full mb-3"
                    />
                </div>

                <div className="form-control">
                    <label className="label">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input input-bordered text-gray-900 w-full"
                    />
                </div>

                <div className="form-control mt-3">
                    <label className="label">Photo URL</label>
                    <input
                        type="text"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className="input input-bordered text-gray-900 w-full"
                    />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-neutral w-full" onClick={handleUpdate}>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
