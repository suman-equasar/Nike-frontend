import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  // Signup
  const signup = (userData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.email === userData.email);
    if (exists) return { success: false, message: "User already exists" };

    const newUser = { id: Date.now(), ...userData };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true };
  };

  // Login
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) return { success: false, message: "Invalid credentials" };

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setCurrentUser(user);
    return { success: true };
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook
export const useAuth = () => useContext(AuthContext);
