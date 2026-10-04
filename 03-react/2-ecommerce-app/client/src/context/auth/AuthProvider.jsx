import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { AuthContext } from "@/context/auth/AuthContext";
import {
  clearCurrentUser,
  createUser,
  findUserByEmail,
  getCurrentUser,
  setCurrentUser,
} from "@/utils/authStorage";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getCurrentUser);

  const isAuthenticated = Boolean(user);

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    }
  }, [user]);

  const register = useCallback(
    ({ name, email, password }) => {
      const newUser = createUser({
        name,
        email,
        password,
      });

      const safeUser = setCurrentUser(newUser);

      setUser(safeUser);

      return safeUser;
    },
    [],
  );

  const login = useCallback(
    ({ email, password }) => {
      const existingUser = findUserByEmail(email);

      if (!existingUser) {
        throw new Error(
          "No account found with this email.",
        );
      }

      if (existingUser.password !== password) {
        throw new Error("Incorrect password.");
      }

      const safeUser = setCurrentUser(existingUser);

      setUser(safeUser);

      return safeUser;
    },
    [],
  );

  const logout = useCallback(() => {
    clearCurrentUser();
    setUser(null);
  }, []);

  const value = {
    user,
    isAuthenticated,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}