import React, { useEffect, useState } from "react";
import { AuthContext, type User } from "./AuthContext";

const CREDENTIALS = { username: "admin", password: "12345678" };

const DEFAULT_USER_DATA = {
  username: "admin",
  fullname: "Administrator",
  profilePicture: "https://placehold.co/400x400/3B82F6/FFFFFF?text=A",
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;
  useEffect(() => {
    try {
      const sessionData = window.localStorage.getItem("auth_session");
      if (sessionData) {
        setUser(JSON.parse(sessionData));
      }
    } catch (error) {
      console.error("Gagal memuat sesi dari localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      if (user) {
        window.localStorage.setItem("auth_session", JSON.stringify(user));
      } else {
        window.localStorage.removeItem("auth_session");
      }
    } catch (error) {
      console.error("Gagal menyimpan sesi ke localStorage", error);
    }
  }, [user]);

  const login = async (username: string, password: string): Promise<void> => {
    await new Promise((res) => setTimeout(res, 500));

    if (
      username === CREDENTIALS.username &&
      password === CREDENTIALS.password
    ) {
      setUser(DEFAULT_USER_DATA);
    } else {
      throw new Error("Username atau password salah");
    }
  };

  const logout = () => {
    setUser(null);
    window.location.href = "/auth/login";
  };

  const updateProfile = (newProfileData: Partial<User>) => {
    setUser((currentUser) =>
      currentUser ? { ...currentUser, ...newProfileData } : null
    );
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    updateProfile,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
