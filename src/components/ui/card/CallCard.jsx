import React from 'react';

const CallCard = ({call}) => {
    return (
      <div>
        <div key={call.id} className="border-b shadow rounded-lg mt-4">
          <div className="flex items-center gap-3 py-4 px-1.5">
            <span className="font-bold text-2xl">{call.icon}</span>
            <div className="flex justify-between items-center w-full">
              <div>
                <h1 className="font-bold text-lg">{call.type}</h1>
                <p className="text-gray-500">{call.text}</p>
              </div>
              <h1 className="font-semibold text-md">
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

export default CallCard;