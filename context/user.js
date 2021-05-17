import React, { useState, useEffect } from "react";
import { db } from "../lib/firebase";

const ProfileContext = React.createContext();

export const ProfileContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  /* useEffect(() => {
    if (user) {
      db.collection("Users")
        .doc(user.uid)
        .onSnapshot((querySnapshot) => {
          setUser({ ...querySnapshot.data() });
        });
    }
  }, [user]);*/
  return (
    <ProfileContext.Provider value={{ user, setUser }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
