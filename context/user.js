import React, { useState } from "react";

const ProfileContext = React.createContext();

export const ProfileContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <ProfileContext.Provider value={{ user, setUser }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
