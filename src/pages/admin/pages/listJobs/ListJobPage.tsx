import { useEffect, useMemo, useState } from "react";
import { FiEdit, FiSearch, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useJobs } from "../../../../contexts/JobsContext";

const getInitialState = (): {
  searchTerm: string;
  itemsPerPage: number;
  currentPage: number;
} => {
  try {
    const savedState = localStorage.getItem("pagination");
    if (savedState) {
      const parsed = JSON.parse(savedState);
      return {
        searchTerm: parsed.searchTerm || "",
        itemsPerPage: parsed.itemsPerPage || 5,
        currentPage: parsed.currentPage || 1,
      };
    }
  } catch (error) {
    console.error("Gagal memuat state dari localStorage", error);
  }
  return {
    searchTerm: "",
    itemsPerPage: 5,
    currentPage: 1,
  };
};

const ListJobPage = () => {
  const initialState = getInitialState();
  const { jobs, deleteJob } = useJobs();

  const [searchTerm, setSearchTerm] = useState(initialState.searchTerm || "");
  const [itemsPerPage, setItemsPerPage] = useState(
    initialState.itemsPerPage || 5
  );
  const [currentPage, setCurrentPage] = useState(initialState.currentPage || 1);
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    jobId: number | null;
  }>({ isOpen: false, jobId: null });

  useEffect(() => {
    const data = {
      searchTerm,
      itemsPerPage,
      currentPage,
    };

    localStorage.setItem("pagination", JSON.stringify(data));
  }, [itemsPerPage, currentPage, searchTerm]);

  const filteredJobs = useMemo(() => {
    if (!searchTerm) return jobs;
    const lowercasedTerm = searchTerm.toLowerCase();
    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(lowercasedTerm) ||
        job.company.toLowerCase().includes(lowercasedTerm) ||
        job.location.toLowerCase().includes(lowercasedTerm)
    );
  }, [jobs, searchTerm]);

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    return filteredJobs.slice(firstPageIndex, firstPageIndex + itemsPerPage);
  }, [filteredJobs, currentPage, itemsPerPage]);

  const handleDelete = (id: number) => {
    setDeleteModal({ isOpen: true, jobId: id });
  };

  const confirmDelete = () => {
    if (deleteModal.jobId) {
      deleteJob(deleteModal.jobId);
    }
    setDeleteModal({ isOpen: false, jobId: null });
  };

  const changePage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        List Lowongan Pekerjaan
      </h1>

      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cari posisi, perusahaan..."
            className="pl-10 pr-4 py-2 border rounded-lg w-80"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            value={searchTerm}
          />
        </div>
        <Link
          to="/dashboard/add-job-vacancies"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Tambah Lowongan
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              {["Posisi Pekerjaan", "Lokasi", "Gaji", "Aksi"].map(
                (item, idx) => (
                  <th
                    className="py-3 px-6 text-left text-sm font-semibold text-gray-600"
                    key={idx}
                  >
                    {item}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((job) => (
              <tr
                key={job.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-10 h-10 rounded-lg object-contain mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{job.title}</p>
                      <p className="text-sm text-gray-500">{job.company}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  {job.location}
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  {job.salary}
                </td>
                <td className="py-4 px-6">
                  <div className="flex gap-x-4">
                    <Link
                      to={`/dashboard/edit-job-vacancies/${job.id}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FiEdit size={18} />
                    </Link>
                    <button
                      onClick={() => handleDelete(job.id)}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6">
        <div>
          <label htmlFor="itemsPerPage" className="text-sm mr-2">
            Data per halaman:
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border rounded-lg p-1 text-sm cursor-pointer"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
        <div className="flex items-center gap-x-1">
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            className="hover:scale-150 hover:shadow-2xl cursor-pointer"
          >
            <MdArrowBackIos />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => changePage(page)}
              className={`px-3 py-1 rounded-lg text-sm cursor-pointer ${
                currentPage === page ? "bg-blue-600 text-white" : "bg-white "
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="hover:scale-150 hover:shadow-2xl cursor-pointer"
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </div>

      {deleteModal.isOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-[10px] shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Konfirmasi Hapus</h2>
            <p>Anda yakin ingin menghapus lowongan pekerjaan ini?</p>
            <div className="flex justify-end gap-x-4 mt-6">
              <button
                onClick={() => setDeleteModal({ isOpen: false, jobId: null })}
                className="px-4 py-2 rounded-lg border hover:bg-gray-100"
              >
                Batal
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListJobPage;
