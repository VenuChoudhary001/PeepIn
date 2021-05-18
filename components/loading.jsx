import React from "react";
import "../styles/loading.module.css";
function Loading() {
  return (
    <>
      <div className="loading">
        <div class="blocks">
          <div class="block orange"></div>
          <div class="block blue"></div>
        </div>
      </div>
    </>
  );
}

export default Loading;
