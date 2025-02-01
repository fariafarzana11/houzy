import React, { useContext, useState } from "react";
import { authContext } from "../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase Storage

const Profile = () => {
    const { user, setUser } = useContext(authContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const [imageFile, setImageFile] = useState(null);

    // Firebase Storage setup
    const storage = getStorage();

    const handleImageUpload = async (file) => {
        const storageRef = ref(storage, `profile_pics/${user.uid}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // You can add a loading progress bar here if you want
            },
            (error) => {
                toast.error("Failed to upload image.");
                console.error(error);
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                setPhotoURL(downloadURL);
                toast.success("Image uploaded successfully!");
            }
        );
    };

    const handleUpdate = async () => {
        if (!user) return;

        try {
            // If there's a new image file, upload it first
            if (imageFile) {
                await handleImageUpload(imageFile);
            }

            await updateProfile(user, { displayName: name, photoURL });
            setUser({ ...user, displayName: name, photoURL });
            toast.success("Profile updated successfully!");
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
                    {/* <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImageFile(e.target.files[0])}
                        className="mt-2"
                    /> */}
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
