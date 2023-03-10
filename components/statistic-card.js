import React from "react";
import Card from "./card";

function StatisticCard(props) {
  return (
    <Card>
      <div className="flex flex-col space-y-3">
        {/* Header */}
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-gray-02">{props.title}</h3>
          <span className="p5 rounded-sm bg-[#F4F5F7] px-2 py-1 text-gray-02">
            {props.date}
          </span>
        </div>
        {/* Details */}
        <div className="flex flex-row items-end justify-between">
          <h1 className="text-black text-[18px]">OMR {props.amount}</h1>
          <h3
            className={props.percentage < 0 ? "text-secondary" : "text-green"}
          >
            {props.percentage < 0
              ? `↓ ${props.percentage * -1}`
              : `↑ ${props.percentage}`}
            %
          </h3>
        </div>

        <hr />

        <div className="text-gray-02">
          <p className="p3">{props.comparedText}</p>
          <p className="p2">{props.lasetWeekText}</p>
        </div>
      </div>
    </Card>
  );
}

export default StatisticCard;
