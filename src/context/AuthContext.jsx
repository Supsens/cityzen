// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";
import { authenticate, signout, getAuth } from "../auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getAuth());

  const login = (u, p) => {
    const res = authenticate(u, p);
    if (res) setUser(res);
    return res;
  };
  const logout = () => {
    signout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
