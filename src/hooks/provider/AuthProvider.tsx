import { createContext, useMemo } from 'react'
import type { FC, PropsWithChildren } from 'react'
import { AuthContext, getAuthContext } from './contexts/AuthContext';

const AuthContextInstance = createContext<AuthContext>(null!);

const AuthProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const auth = getAuthContext();
  
  return (
      <AuthContextInstance.Provider value={auth}>
        {children}
      </AuthContextInstance.Provider>
  )
}

export {
  AuthProvider,
  AuthContextInstance
}