import React, { useContext } from "react";
import { Context } from "../../context/Context";
import TimeLineCard from "../../components/ui/card/TimeLineCard";

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
                <TimeLineCard call={call} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
