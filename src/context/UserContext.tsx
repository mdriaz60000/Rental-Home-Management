"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useGetCurrentUser } from "./useGetCurrentUser";
import { IUser } from "@/type";

interface IUserProviderValues {
  user: IUser | null;
  isLoading: boolean;
  setUser: (user: IUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  refetch?: () => void; // 🔁 add this
}
const UserContext = createContext<IUserProviderValues | undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, refetch  } = useGetCurrentUser();
  const [user, setUser] = useState<IUser | null>(null);

  React.useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  // console.log("data context" ,data )

  return (
    <UserContext.Provider value={{ user, isLoading, setUser,  setIsLoading: () => {}, refetch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within the UserProvider");
  }
  return context;
};

export default UserProvider;
