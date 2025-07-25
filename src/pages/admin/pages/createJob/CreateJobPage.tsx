import { useNavigate } from "react-router-dom";
import { useJobs } from "../../../../contexts/JobsContext";
import type { TJob } from "../../../../types/job";
import { useState } from "react";

const initialFormState: Omit<TJob, "id"> = {
  title: "",
  company: "",
  location: "",
  logo: "",
  experience: "",
  salary: "",
  salaryRange: { min: 0, max: 0 },
  description: "",
  daysLeft: 30, // Default sisa hari
  isBookmark: false,
};

const CreateJobPage = () => {
  const navigate = useNavigate();
  const { addJob } = useJobs();

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      return;
    }
    if (name.startsWith("salaryRange.")) {
      const key = name.split(".")[1] as "min" | "max";
      setFormData((prev) => ({
        ...prev,
        salaryRange: { ...prev.salaryRange, [key]: Number(value) },
      }));
      return;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addJob(formData);
    alert("Lowongan baru berhasil ditambahkan!");
    navigate("/dashboard/list-job-vacancies");
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Tambah Lowongan Pekerjaan Baru
      </h1>

      {/* Form di bawah ini memiliki struktur yang sama dengan halaman Edit */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Baris 1: Posisi & Perusahaan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Posisi Pekerjaan
            </label>
            <input
              type="text"
              required
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 input-field"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Perusahaan
            </label>
            <input
              type="text"
              required
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 input-field"
            />
          </div>
        </div>

        {/* Baris 2: Lokasi & URL Logo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Lokasi
            </label>
            <input
              type="text"
              required
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 input-field"
            />
          </div>
          <div>
            <label
              htmlFor="logo"
              className="block text-sm font-medium text-gray-700"
            >
              URL Logo Perusahaan
            </label>
            <input
              type="text"
              required
              name="logo"
              id="logo"
              value={formData.logo}
              onChange={handleChange}
              className="mt-1 input-field"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="salary"
              className="block text-sm font-medium text-gray-700"
            >
              Gaji (Teks Display)
            </label>
            <input
              type="text"
              name="salary"
              id="salary"
              placeholder="Contoh: Rp10jt - Rp15jt"
              value={formData.salary}
              onChange={handleChange}
              className="mt-1 input-field"
            />
          </div>
          <div>
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700"
            >
              Pengalaman
            </label>
            <input
              type="text"
              name="experience"
              id="experience"
              placeholder="Contoh: 2-3 tahun pengalaman"
              value={formData.experience}
              onChange={handleChange}
              className="mt-1 input-field"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="salaryRange.min"
              className="block text-sm font-medium text-gray-700"
            >
              Gaji Minimum (Angka)
            </label>
            <input
              type="number"
              name="salaryRange.min"
              id="salaryRange.min"
              placeholder="Contoh: 10000000"
              value={formData.salaryRange.min}
              onChange={handleChange}
              className="mt-1 input-field"
            />
          </div>
          <div>
            <label
              htmlFor="salaryRange.max"
              className="block text-sm font-medium text-gray-700"
            >
              Gaji Maksimum (Angka)
            </label>
            <input
              type="number"
              name="salaryRange.max"
              id="salaryRange.max"
              placeholder="Contoh: 15000000"
              value={formData.salaryRange.max}
              onChange={handleChange}
              className="mt-1 input-field"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Deskripsi
          </label>
          <textarea
            name="description"
            id="description"
            rows={5}
            value={formData.description}
            onChange={handleChange}
            className="mt-1 input-field"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <label
              htmlFor="daysLeft"
              className="block text-sm font-medium text-gray-700"
            >
              Sisa Hari Lowongan
            </label>
            <input
              type="number"
              name="daysLeft"
              id="daysLeft"
              value={formData.daysLeft}
              onChange={handleChange}
              className="mt-1 input-field"
            />
          </div>
        </div>

        <div className="flex justify-end gap-x-4 pt-4">
          <button
            type="button"
            onClick={() => navigate("/dashboard/list-job-vacancies")}
            className="px-6 py-2 rounded-lg border hover:bg-gray-100"
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Simpan & Publikasikan
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateJobPage;
