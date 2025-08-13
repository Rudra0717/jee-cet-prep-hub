import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { auth, User } from '../utils/auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string, rememberMe?: boolean) => Promise<{ success: boolean; error?: string }>;
  register: (data: any) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing user session on app load
    const currentUser = auth.getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const login = async (email: string, password: string, rememberMe = false) => {
    setLoading(true);
    try {
      const result = await auth.login({ email, password, rememberMe });
      if (result.success && result.user) {
        setUser(result.user);
      }
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      return { success: false, error: 'Login failed' };
    }
  };

  const register = async (data: any) => {
    setLoading(true);
    try {
      const result = await auth.register(data);
      if (result.success && result.user) {
        setUser(result.user);
      }
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      return { success: false, error: 'Registration failed' };
    }
  };

  const logout = () => {
    auth.logout();
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 