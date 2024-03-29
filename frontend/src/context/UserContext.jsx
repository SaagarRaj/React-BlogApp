/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Url } from "../Url";

export const UserContext = createContext({});

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
      // console.log(res.data)
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
