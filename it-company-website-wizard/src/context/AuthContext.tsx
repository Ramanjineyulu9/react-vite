// src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';

type AuthContextType = {
  isAuth: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // Check for existing token on initial load
    const token = localStorage.getItem('token');
    setIsAuth(!!token);
  }, []);

  const login = (token: string) => {
    localStorage.setItem('token', token);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);