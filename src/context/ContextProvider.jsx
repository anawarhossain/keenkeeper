import React, { useEffect, useState } from "react";
import { Context } from "./Context";

const ContextProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  const [callButtons, setCallButtons] = useState([]);

  const handleCall = ({ expecteFriend, Call, Icon, text }) => {
    const newCall = {
      id: Date.now(),
      type: Call,
      icon: Icon,
      text: text,
      timestamp: new Date().toISOString(),
      expecteFriend: expecteFriend,
    };

    setCallButtons((prev) => {
      const updated = [...prev, newCall];
      console.log("Updated callButtons:", updated);
      return updated;
    });
  };

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
    callButtons,
    setCallButtons,
    handleCall,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default ContextProvider;
