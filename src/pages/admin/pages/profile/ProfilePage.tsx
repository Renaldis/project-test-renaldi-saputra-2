import { useEffect, useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";

const ProfilePage = () => {
  const { user, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    fullname: "",
    profilePicture: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        fullname: user.fullname,
        profilePicture: user.profilePicture,
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfile({
      fullname: formData.fullname,
      profilePicture: formData.profilePicture,
    });
    setSuccessMessage("Profil berhasil diperbarui!");

    setTimeout(() => setSuccessMessage(""), 3000);
  };

  if (!user) {
    return <div className="text-center p-10">Loading profile...</div>;
  }
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Update Profil</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center">
          <img
            src={formData.profilePicture || ""}
            alt="Pratinjau Profil"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            value={user.username}
            disabled
            className="mt-1 input-field bg-gray-100 cursor-not-allowed"
          />
          <p className="text-xs text-gray-500 mt-1">
            Username tidak dapat diubah.
          </p>
        </div>

        <div>
          <label
            htmlFor="fullname"
            className="block text-sm font-medium text-gray-700"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="mt-1 input-field"
            required
          />
        </div>

        <div>
          <label
            htmlFor="profilePicture"
            className="block text-sm font-medium text-gray-700"
          >
            URL Foto Profil
          </label>
          <input
            type="text"
            name="profilePicture"
            id="profilePicture"
            value={formData.profilePicture}
            onChange={handleChange}
            className="mt-1 input-field"
            required
          />
        </div>

        {successMessage && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
            role="alert"
          >
            <span className="block sm:inline">{successMessage}</span>
          </div>
        )}

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
