import { createContext, useEffect, useState } from "react";
import { Url } from "../Url";
import axios from "axios";
export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const res = await axios.get(Url + "/api/auth/refetch", {
        withCredentials: true,
      });
      console.log(res.data);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
