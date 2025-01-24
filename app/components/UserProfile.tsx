"use client";
import React, { useState } from "react";

// UserProfileForm component
const UserProfileForm = ({ onUpdateProfile }: { onUpdateProfile: Function }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = () => {
    // Instead of alert, we call the parent function to update profile data
    onUpdateProfile(userData);
  };

  return (
    <div className="bg-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Update Your Profile</h1>
      <div className="mb-6">
        <label className="block text-xl">Name</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          className="border rounded px-4 py-2 w-full mt-2"
        />
      </div>
      <div className="mb-6">
        <label className="block text-xl">Email</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          className="border rounded px-4 py-2 w-full mt-2"
        />
      </div>
      <div className="mb-6">
        <label className="block text-xl">Address</label>
        <input
          type="text"
          name="address"
          value={userData.address}
          onChange={handleChange}
          className="border rounded px-4 py-2 w-full mt-2"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Update Profile
      </button>
    </div>
  );
};

// UserProfile component that will display updated user data
const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Duaa Pirzada", // default value
    email: "duaa@example.com",
    address: "123 Street, City, Country",
  });

  const updateProfile = (newData: { name: string; email: string; address: string }) => {
    setUser(newData); // Update the user state with new data
  };

  return (
    <div className="bg-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Name: {user.name}</h2>
        <p className="text-xl">Email: {user.email}</p>
        <p className="text-xl">Address: {user.address}</p>
      </div>

      {/* Pass the updateProfile function to UserProfileForm */}
      <UserProfileForm onUpdateProfile={updateProfile} />
    </div>
  );
};

export default UserProfile;

