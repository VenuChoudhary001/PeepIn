import React from "react";
import "../styles/loading.module.css";
function Loading() {
  return (
    <>
      <div className="loading">
        <div className="blocks">
          <div className="block orange"></div>
          <div className="block blue"></div>
        </div>
      </div>
    </>
  );
}

export default Loading;
