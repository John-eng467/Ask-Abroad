import React, { createContext, useState, useContext } from 'react';

type AuthStatus = 'guest' | 'authenticated' | 'none';
type SubscriptionStatus = 'free' | 'premium';
type ServiceType = 'study' | 'migration' | 'travel' | 'work';
type UserRole = 'customer' | 'consultant' | 'resident';

interface AuthContextType {
  authStatus: AuthStatus;
  subscriptionStatus: SubscriptionStatus;
  selectedService: ServiceType | null;
  userRole: UserRole | null;
  login: (role?: UserRole) => void;
  signUp: () => void;
  loginAsGuest: () => void;
  logout: () => void;
  subscribe: () => void;
  setSelectedService: (service: ServiceType) => void;
  setUserRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('none');
  const [subscriptionStatus, setSubscriptionStatus] = useState<SubscriptionStatus>('free');
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  const login = (role?: UserRole) => {
    setAuthStatus('authenticated');
    if (role) {
      setUserRole(role);
    }
  };

  const signUp = () => {
    setAuthStatus('authenticated');
  };

  const loginAsGuest = () => {
    setAuthStatus('guest');
  };

  const logout = () => {
    setAuthStatus('none');
    setSubscriptionStatus('free');
    setSelectedService(null);
    setUserRole(null);
  };

  const subscribe = () => {
    setSubscriptionStatus('premium');
  };

  return (
    <AuthContext.Provider
      value={{
        authStatus,
        subscriptionStatus,
        selectedService,
        userRole,
        login,
        signUp,
        loginAsGuest,
        logout,
        subscribe,
        setSelectedService,
        setUserRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};