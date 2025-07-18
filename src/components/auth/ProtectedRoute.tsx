import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  // Jika sudah login, tampilkan kontennya (melalui Outlet).
  // Jika tidak, arahkan ke halaman login.
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
