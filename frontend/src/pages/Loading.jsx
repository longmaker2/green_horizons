import React from "react";
import "../styles/loading.css";
import { ClockLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="loading-container">
      <ClockLoader color={"#1a5d1a"} loading={true} size={150} />
    </div>
  );
};

export default Loading;
