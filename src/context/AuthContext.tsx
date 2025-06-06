import React, { createContext, useState, useContext } from 'react';

type AuthStatus = 'guest' | 'authenticated' | 'none';
type SubscriptionStatus = 'free' | 'premium';
type ServiceType = 'study' | 'migration' | 'travel' | 'work';

interface AuthContextType {
  authStatus: AuthStatus;
  subscriptionStatus: SubscriptionStatus;
  selectedService: ServiceType | null;
  login: () => void;
  signUp: () => void;
  loginAsGuest: () => void;
  logout: () => void;
  subscribe: () => void;
  setSelectedService: (service: ServiceType) => void;
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

  const login = () => {
    setAuthStatus('authenticated');
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
        login,
        signUp,
        loginAsGuest,
        logout,
        subscribe,
        setSelectedService,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};