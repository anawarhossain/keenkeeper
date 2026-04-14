import React, { useEffect, useState } from "react";
import { Context } from "./Context";

const ContextProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const data = {
    friends,
    setFriends,
    loading,
    setLoading,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default ContextProvider;
