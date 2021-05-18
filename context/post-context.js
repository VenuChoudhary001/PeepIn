import React, { useState, useEffect, useContext } from "react";
import { db } from "../lib/firebase";

const ALL_POSTS = React.createContext();

export const ALL_POST_PROVIDER = ({ children }) => {
  const [allPost, setAllPost] = useState([]);
  const [myPost, setMyPost] = useState();
  const [picURL, setPicURL] = useState();
  useEffect(() => {
    if (myPost) {
      db.collection("posts").get((snapshot) => {
        setAllPost(
          snapshot.docs.map((item) => {
            return { ...item.data() };
          })
        );
      });
    }
  }, [myPost]);
  return (
    <ALL_POSTS.Provider
      value={{ allPost, setAllPost, myPost, setMyPost, picURL, setPicURL }}
    >
      {children}
    </ALL_POSTS.Provider>
  );
};

export default ALL_POSTS;
/**
---> All post provider
all components mei jayega
when create post 
  --->update ALL post
  --->map

 */
