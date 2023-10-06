import React from "react";
import { EditFilled, DeleteFilled } from '@ant-design/icons';

function DetailComponent({feedback}) {
  return (
    <div className="feedback-item-container">
      <p className="feedback-content">{feedback.feedback}</p>
      <span className="point">{feedback.point}</span>
      <div className="action-container">
        <button><EditFilled /></button>
        <button><DeleteFilled /></button>
      </div>
    </div>
  );
}

export default DetailComponent;
