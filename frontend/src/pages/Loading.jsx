import React from "react";
import "../styles/loading.css";
import { ClockLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="loading-container">
      <ClockLoader color={"#36D7B7"} loading={true} size={150} />
    </div>
  );
};

export default Loading;
