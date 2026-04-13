import React, { useEffect, useState } from "react";
import { Context } from "./Context";

const ContextProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data))
      .catch((err) => console.log(err));
  }, []);
    
    
    
    
    
    const data = {
        friends,
        setFriends,
    }

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
