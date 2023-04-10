import React from "react";
import CommonBanner from "../CommonBanner/CommonBanner";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistic = () => {
  const mark = [
    { assignment: "assign-1", score: 60 },
    { assignment: "assign-2", score: 60 },
    { assignment: "assign-3", score: 60 },
    { assignment: "assign-4", score: 60 },
    { assignment: "assign-5", score: 60 },
    { assignment: "assign-6", score: 60 },
    { assignment: "assign-7", score: 60 },
    { assignment: "assign-8", score: 60 },
  ];

  return (
    <>
      <div>
        <CommonBanner>Statistics</CommonBanner>
      </div>

      <div className="my-12">
        <div>
          <AreaChart
            width={900}
            height={350}
            data={mark}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="assignment" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotoneX"
              dataKey="score"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>
      </div>
    </>
  );
};

export default Statistic;
