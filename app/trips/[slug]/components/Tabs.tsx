"use client";

import { useState } from "react";
import Overview from "./Overview";
import Itinerary from "./Itinerary";
import Inclusions from "./Inclusions";
import Exclusions from "./Exclusions";
import OtherInfo from "./OtherInfo";

const tabs = [
  "Overview",
  "Itinerary",
  "Inclusions",
  "Exclusions",
  "Other Info",
];

export default function Tabs({ place }: any) {
  const [active, setActive] = useState("Overview");

  return (
    <div>
      {/* TAB BUTTONS */}
      <div className="flex gap-6 border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`pb-3 font-medium ${
              active === tab
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="bg-white rounded-xl shadow p-6">
        {active === "Overview" && <Overview data={place.overview} />}
        {active === "Itinerary" && <Itinerary data={place.itinerary} />}
        {active === "Inclusions" && <Inclusions data={place.inclusions} />}
        {active === "Exclusions" && <Exclusions data={place.exclusions} />}
        {active === "Other Info" && <OtherInfo data={place.otherInfo} />}
      </div>
    </div>
  );
}