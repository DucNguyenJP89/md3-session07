import React from "react";

function TotalComponent({feedbacks}) {
  const totalNum = feedbacks.length;
  return (
    <div className="section-total-review">
      <div className="total-review-container">
        <span>{totalNum} Reviews</span>
        <span>Average Rating: 9.3</span>
      </div>
    </div>
  );
}

export default TotalComponent;
