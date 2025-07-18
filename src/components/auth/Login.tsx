import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import logo from "/assets/jc-logo.png";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login, user } = useAuth();

  useEffect(() => {
    if (user) {
      window.location.href = "/dashboard";
    }
  }, [user]);

  const [input, setInput] = useState({ username: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (input.password.length < 8) {
      setError("Password minimal harus 8 karakter");
    }

    try {
      await login(input.username, input.password);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Username atau password yang Anda masukkan salah.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 bg-gray-100 min-h-screen">
      <div className="mb-8">
        <img src={logo} alt="Workify logo" className="inline-block w-20" />
        <span className="text-2xl font-semibold text-gray-800 ml-2">
          JobCareer
        </span>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] md:w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Login Akun</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg bg-blue-100"
              placeholder="username"
              name="username"
              value={input.username}
              onChange={handleInput}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full p-3 border rounded-lg bg-blue-100"
              placeholder="********"
              name="password"
              value={input.password}
              onChange={handleInput}
              min={8}
            />
          </div>

          {error && (
            <p className="text-red-600 -mt-2 mb-2">
              Please enter a correct username and password
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-800 cursor-pointer"
          >
            Masuk Sekarang
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
