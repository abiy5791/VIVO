import React, { useState, useEffect } from "react";

function CircularProgress({ percent }) {
  const [offset, setOffset] = useState(0);
  const radius = 60;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - percent) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, circumference, percent, offset]);

  return (
    <div className="flex items-center justify-center">
      <svg className="transform -rotate-90 w-36 h-36">
        <circle
          cx="72.5"
          cy="72.5"
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-700"
        />
        <circle
          cx="72.5"
          cy="72.5"
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={`stroke-current text-${percent > 50 ? "blue" : "red"}-500`}
        />
      </svg>
      <span className="absolute text-2xl font-semibold">{percent}%</span>
    </div>
  );
}

export default CircularProgress;
