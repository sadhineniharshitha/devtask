import React, { useState } from "react";

function AccountSettings() {
  const defaultImage = "https://randomuser.me/api/portraits/men/32.jpg";
  const [profileImage, setProfileImage] = useState(defaultImage);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(defaultImage);
    setShowConfirm(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md relative">
      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>

      {/* Profile Image + Upload */}
      <div className="flex items-center mb-6">
        <img
          src={profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-2 border-purple-600"
        />
        <div className="ml-4">
          <h3 className="text-lg font-medium">Your Name</h3>
          <p className="text-gray-600">your.email@example.com</p>

          <input
            type="file"
            accept="image/*"
            id="profileUpload"
            className="hidden"
            onChange={handleImageChange}
          />

          <div className="flex gap-3 mt-2">
            <label
              htmlFor="profileUpload"
              className="text-sm text-purple-700 underline cursor-pointer"
            >
              Change Picture
            </label>
            <button
              onClick={() => setShowConfirm(true)}
              className="text-sm text-red-600 underline"
            >
              Remove Picture
            </button>
          </div>
        </div>
      </div>

      <button className="w-full h-12 bg-purple-700 text-white rounded-lg font-medium">
        Save Changes
      </button>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h3 className="text-lg font-semibold mb-4">Confirm Removal</h3>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to remove your profile picture?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleRemoveImage}
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountSettings;