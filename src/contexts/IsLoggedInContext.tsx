import { ReactNode, createContext, useContext, useState } from "react";
import { logIn, logOut } from "../api/api";

interface IsLoggedInContextInterface {
  isLoggedIn: boolean | null;
  logInAction: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  logOutAction: Function;
}

const IsLoggedInContext = createContext<IsLoggedInContextInterface | null>(
  null
);

export function useIsLoggedInContext() {
  const context = useContext(IsLoggedInContext);
  if (!context) {
    throw new Error(
      "This component should be placed in IsLoggedInContextProvider"
    );
  }
  return context;
}

function useIsLoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    localStorage.getItem("isLoggedIn") ? true : false
  );
  const logInAction = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await logIn({ email, password });
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };
  const logOutAction = async () => {
    await logOut();
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return {
    isLoggedIn,
    logInAction,
    logOutAction,
  };
}

export function IsLoggedInContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const value = useIsLoggedIn();
  return (
    <IsLoggedInContext.Provider value={value}>
      {children}
    </IsLoggedInContext.Provider>
  );
}
