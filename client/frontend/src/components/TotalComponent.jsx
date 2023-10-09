import React from "react";

function TotalComponent({feedbacks}) {
  const totalNum = feedbacks.length;
  const averagePoint = feedbacks.reduce((sum, feedback)=> {
    return sum + feedback.point
  }, 0)/totalNum;
  return (
    <div className="section-total-review">
      <div className="total-review-container">
        <span>{totalNum} Reviews</span>
        <span>Average Rating: {averagePoint.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default TotalComponent;
