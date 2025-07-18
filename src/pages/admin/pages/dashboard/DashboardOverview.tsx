import { useAuth } from "../../../../contexts/AuthContext";

const DashboardOverview = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
      <p className="text-gray-600 mt-2">Selamat datang {user?.fullname}</p>
    </div>
  );
};

export default DashboardOverview;
