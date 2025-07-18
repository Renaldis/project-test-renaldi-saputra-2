import { createContext, useContext } from "react";

export type User = {
  username: string;
  fullname: string;
  profilePicture: string;
};

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (newProfileData: Partial<User>) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("UseAuth harus digunakan didalam auth provider");
  }
  return context;
};
