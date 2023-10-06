import React from "react";
import DetailComponent from "./DetailComponent";

function ListComponent({ feedbacks }) {
  return (
    feedbacks.length > 0 && (
      <div className="section-feedback-item container">
        <div className="feedback-container">
          {feedbacks.map((feedback) => (
            <DetailComponent feedback={feedback} key={feedback.id}/>
          ))}
        </div>
      </div>
    )
  );
}

export default ListComponent;
