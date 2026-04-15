import React, { useEffect, useState } from "react";
import { Context } from "./Context";
import { toast } from "react-toastify";

const ContextProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  const [callButtons, setCallButtons] = useState([]);

  const handleCall = ({ expecteFriend, item, icon, text }) => {
    const newCall = {
      id: Date.now(),
      type: item,
      icon: icon,
      text: text,
      timestamp: new Date().toISOString(),
      expecteFriend: expecteFriend,
    };

    setCallButtons((prev) => {
      const updated = [...prev, newCall];
      console.log("Updated callButtons:", updated);
      return updated;
    });

    toast.success(`${item} successfully added!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
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
