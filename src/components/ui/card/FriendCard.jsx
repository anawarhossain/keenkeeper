import React from "react";
import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  const statusColors = {
    "on-track": "bg-green-800",
    "almost due": "bg-yellow-500",
    overdue: "bg-red-500",
  };

  return (
    <Link to={`/friend/${friend.id}`} className="block">
      <div className="shadow bg-white rounded-lg py-5 px-0.5 hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 cursor-pointer">
        <div className="space-y-2">
          <img
            className="w-1/2 h-1/2 rounded-full mx-auto"
            src={friend.picture}
            alt={friend.name}
          />
          <h1 className="text-2xl font-bold">{friend.name}</h1>
          <p className="text-gray-600 text-sm">
            {friend.days_since_contact}d ago
          </p>
          <div>
            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="
              bg-green-500 text-white px-2 py-1 rounded-full text-xs mb-2 mr-2 inline-block"
              >
                {tag}
              </span>
            ))}
          </div>
          <span
            className={`${statusColors[friend.status]} text-white px-2 py-1 rounded-full text-xs`}
          >
            {friend.status}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
