import React, {createContext, useState, type FC, ReactNode} from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const AuthProvider: FC<{children: ReactNode}> = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Implement OpenID Connect login flow here
    // Set isAuthenticated to true upon successful authentication
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Implement logout flow here
    // Set isAuthenticated to false
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{isAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
