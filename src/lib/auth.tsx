import storage from "../utils/storage";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

import {
  loginWithEmailAndPassword,
  UserResponse,
  LoginCredentialsDTO,
  AuthUser,
} from "../features/auth";
import { loadUser } from "./loadUser";

type AuthContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
  login: (credentials: LoginCredentialsDTO) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  login: () => Promise.resolve(),
  logout: () => {},
  isLoading: true,
});

async function handleUserResponse(data: UserResponse) {
  const { accessToken, user } = data;
  storage.setToken(accessToken);
  return user;
}

async function loginFn(credentials: LoginCredentialsDTO): Promise<void> {
  const response = await loginWithEmailAndPassword(credentials);
  // console.log(response);

  await handleUserResponse(response["data"]);
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function initializeUser() {
      const userData = await loadUser();
      // console.log(userData);
      if (userData?.role === "userRole1" || userData?.role === "userRole2") {
        setUser({
          fullName: "test",
          id: 1,
          role: "userRole2",
          phoneNumber: "07701111111",
        });
        // setUser(userData);
      }
      setUser({
        fullName: "test",
        id: 1,
        role: "userRole2",
        phoneNumber: "07701111111",
      });
      setIsLoading(false);
    }

    initializeUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser: setUser,
        login: loginFn,
        logout: logoutFn,
        isLoading: isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
