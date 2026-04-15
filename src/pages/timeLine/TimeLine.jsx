import React, { useContext } from "react";
import { Context } from "../../context/Context";

const TimeLine = () => {
  const { callButtons } = useContext(Context);

  return (
    <div className="w-[90%] mx-auto">
      <div className="mt-10 mb-10">
        <div>
          <h1 className="text-4xl font-bold">TimeLine</h1>
          <fieldset className="fieldset">
            <select defaultValue="All" className="select">
              <option>All</option>
              <option>Call</option>
              <option>Text</option>
              <option>Video</option>
            </select>
          </fieldset>
        </div>
        <div>
          <div>
            {callButtons.map((call) => (
              <div key={call.id}>
                <div className="border-b bg-white shadow rounded-lg mt-5">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
