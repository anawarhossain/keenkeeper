import React, { useContext } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Context } from "../../context/Context";

const Stats = ({ isAnimationActive = true }) => {
  const { callButtons } = useContext(Context);
  console.log("callButtons in Stats:", callButtons);

  const data = [
    {
      name: "Text",
      value: callButtons.filter((call) => call.type === "Text")?.length,
      fill: "#0088FE",
    },
    {
      name: "Call",
      value: callButtons.filter((call) => call.type === "Call")?.length,
      fill: "#00C49F",
    },
    {
      name: "Video",
      value: callButtons.filter((call) => call.type === "Video")?.length,
      fill: "#FFBB28",
    },
  ];

  return (
    <div className="w-[90%] md:w-[70%] mx-auto">
      <div className="mt-10 mb-10">
        <h1 className="text-4xl font-bold mb-4">Friendship Analytics</h1>

        <div className="h-75 md:h-100 p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-lg mb-4">By Interaction Type</h1>

          {/* Responsive Wrapper */}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ bottom: 30 }}>
              <Pie
                data={data}
                innerRadius="60%"
                outerRadius="80%"
                cornerRadius={100}
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={isAnimationActive}
              />
              <Tooltip />
              <Legend verticalAlign="bottom" height={45} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;
