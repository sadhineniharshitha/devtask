import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function AccountSettings() {
  const defaultImage = "https://randomuser.me/api/portraits/men/32.jpg";
  const [profileImage, setProfileImage] = useState(defaultImage);
  const [showConfirm, setShowConfirm] = useState(false);

  // ✅ Get data passed from CreateAccount
  const location = useLocation();
  const userData = location.state || {};

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
    <>
      <div className="settings-container">
        <h2 className="settings-title">Account Settings</h2>

        {/* Profile Image + Upload */}
        <div className="profile-section">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-img"
          />
          <div className="profile-info">
            <h3 className="profile-name">{userData.name || "Your Name"}</h3>
            <p className="profile-email">{userData.email || "your.email@example.com"}</p>
            <p className="profile-phone">{userData.phone && `Phone: ${userData.phone}`}</p>
            <p className="profile-company">{userData.company && `Company: ${userData.company}`}</p>
            <p className="profile-agency">{userData.agency && `Agency: ${userData.agency}`}</p>

            <input
              type="file"
              accept="image/*"
              id="profileUpload"
              className="hidden-input"
              onChange={handleImageChange}
            />

            <div className="profile-actions">
              <label htmlFor="profileUpload" className="change-link">
                Change Picture
              </label>
              <button
                onClick={() => setShowConfirm(true)}
                className="remove-link"
              >
                Remove Picture
              </button>
            </div>
          </div>
        </div>

        <button className="save-btn">Save Changes</button>

        {/* Confirmation Modal */}
        {showConfirm && (
          <div className="modal-overlay">
            <div className="modal-box">
              <h3 className="modal-title">Confirm Removal</h3>
              <p className="modal-text">
                Are you sure you want to remove your profile picture?
              </p>
              <div className="modal-actions">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="cancel-btn"
                >
                  Cancel
                </button>
                <button
                  onClick={handleRemoveImage}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .settings-container {
          max-width: 500px;
          margin: 2.5rem auto;
          padding: 1.5rem;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          position: relative;
        }

        .settings-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .profile-section {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .profile-img {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #6b21a8;
        }

        .profile-info {
          margin-left: 1rem;
        }

        .profile-name {
          font-size: 1.1rem;
          font-weight: 500;
        }

        .profile-email,
        .profile-phone,
        .profile-company,
        .profile-agency {
          font-size: 0.9rem;
          color: #555;
        }

        .hidden-input {
          display: none;
        }

        .profile-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .change-link {
          font-size: 0.85rem;
          color: #6b21a8;
          text-decoration: underline;
          cursor: pointer;
        }

        .remove-link {
          font-size: 0.85rem;
          color: #ef4444;
          text-decoration: underline;
          background: none;
          border: none;
          cursor: pointer;
        }

        .save-btn {
          width: 100%;
          height: 48px;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          background: #6b21a8;
          color: #fff;
        }

        .modal-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-box {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          padding: 1.5rem;
          width: 320px;
        }

        .modal-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .modal-text {
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 1.5rem;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
        }

        .cancel-btn {
          padding: 0.5rem 1rem;
          border-radius: 6px;
          background: #e5e7eb;
          border: none;
          cursor: pointer;
        }

        .remove-btn {
          padding: 0.5rem 1rem;
          border-radius: 6px;
          background: #ef4444;
          color: #fff;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default AccountSettings;