import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = { displayName: name, photoURL: photoURL };
    updateUserProfile(updatedData).then(() => {
      alert('Profile updated successfully');
    }).catch((error) => {
      alert('Error updating profile: ' + error.message);
    });
  };

  return (
    <>
      <header className="bg-[#eff0f7] " >
        <nav className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <div className="w-1/3 mx-auto mt-10">
          <h1 className="text-3xl font-bold text-center text-gray-800">Update Profile</h1>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full mt-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Profile Image URL</label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="input input-bordered w-full mt-2"
              />
            </div>
            <button type="submit" className="btn bg-blue-500 text-white hover:bg-blue-600 mt-4">
              Save Changes
            </button>
          </form>
        </div>
      </main>
      <footer className='mt-40'>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default UpdateProfile;
