import React from 'react';

const TimeLineCard = ({ call }) => {
    return (
      <div>
        <div className="border-b bg-white shadow rounded-lg">
          <div className="flex items-center gap-3 py-4 px-2.5">
            <span className="font-bold text-2xl">{call.icon}</span>
            <div className="">
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-lg">{call.type}</h1>
                <p className="text-gray-500">
                  <span>with</span> {call.expecteFriend.name}
                </p>
              </div>

              <h1 className="text-gray-500">
                {new Date(call.timestamp).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TimeLineCard;