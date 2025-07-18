import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { TJob } from "../../../../types/job";
import { useJobs } from "../../../../contexts/JobsContext";

const EditJobPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { jobs, updateJob } = useJobs();

  const [formData, setFormData] = useState<Partial<TJob>>({});

  useEffect(() => {
    if (id) {
      const jobToEdit = jobs.find((job) => job.id === Number(id));
      if (jobToEdit) {
        setFormData(jobToEdit);
      } else {
        navigate("/dashboard/list-job-vacancies");
      }
    }
  }, [id, jobs, navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (name.startsWith("salaryRange.")) {
      const key = name.split(".")[1] as "min" | "max";

      setFormData((prev) => {
        const currentSalaryRange = prev?.salaryRange || { min: 0, max: 0 };

        const newSalaryRange = {
          ...currentSalaryRange,
          [key]: Number(value),
        };

        return {
          ...prev,
          salaryRange: newSalaryRange,
        };
      });
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      updateJob(Number(id), formData);
      alert("Data berhasil diperbarui!");
      navigate("/dashboard/list-job-vacancies");
    }
  };

  if (!formData.id) {
    return <div className="text-center p-10">Loading...</div>;
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Edit Lowongan Pekerjaan: {formData.title}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
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
              name="title"
              id="title"
              value={formData.title || ""}
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
              name="company"
              id="company"
              value={formData.company || ""}
              onChange={handleChange}
              className="mt-1 input-field"
            />
          </div>
        </div>

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
              name="location"
              id="location"
              value={formData.location || ""}
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
              name="logo"
              id="logo"
              value={formData.logo || ""}
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
              value={formData.salary || ""}
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
              value={formData.experience || ""}
              onChange={handleChange}
              className="mt-1 input-field"
            />
          </div>
        </div>

        {/* Baris 4: Rentang Gaji (Angka) */}
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
              value={formData.salaryRange?.min || ""}
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
              value={formData.salaryRange?.max || ""}
              onChange={handleChange}
              className="mt-1 input-field"
            />
          </div>
        </div>

        {/* Deskripsi */}
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
            value={formData.description || ""}
            onChange={handleChange}
            className="mt-1 input-field"
          />
        </div>

        {/* Baris 5: Sisa Hari & Bookmark */}
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
              value={formData.daysLeft || 0}
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
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditJobPage;
