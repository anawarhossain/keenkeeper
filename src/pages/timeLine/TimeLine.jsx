import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import TimeLineCard from "../../components/ui/card/TimeLineCard";
import NodataTimelineCard from "../../components/ui/card/NodataTimelineCard";

const TimeLine = () => {
  const { callButtons } = useContext(Context);
  const [selectedType, setSelectedType] = useState("All");
  // console.log("callButtons in TimeLine:", callButtons);
  // console.log("selectedType in TimeLine:", selectedType);

  const filteredCalls =
    selectedType === "All"
      ? callButtons
      : callButtons.filter(
          (call) => call.type.toLowerCase() === selectedType.toLowerCase(),
        );

  return (
    <div className="w-[90%] mx-auto">
      <div className="mt-10 mb-10">
        <div>
          <h1 className="text-4xl font-bold">TimeLine</h1>
          <fieldset className="fieldset">
            <select
              className="select"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option>All</option>
              <option>Call</option>
              <option>Text</option>
              <option>Video</option>
            </select>
          </fieldset>
        </div>
        <div className="mt-5">
          {filteredCalls.length === 0 ? (
            <div className="h-100 flex items-center justify-center bg-white rounded-lg shadow-md">
              <NodataTimelineCard />
            </div>
          ) : (
            <div className="space-y-5">
              {filteredCalls.map((call) => (
                <div key={call.id}>
                  <TimeLineCard call={call} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
