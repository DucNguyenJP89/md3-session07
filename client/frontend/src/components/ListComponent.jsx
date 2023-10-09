import React from "react";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import Swal from "sweetalert2";

function ListComponent({feedbacks, setSelectedFeedback}) {
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Delete',
      icon: 'warning',
      text: 'Are you sure you want to delete this feedaback?',
      showCancelButton: true
    }).then(res => {
      if (res.isConfirmed) {
        fetch(`http://localhost:3000/api/v1/feedbacks/${id}`, {
          method: 'DELETE'
        }).then(res => res.json()).then(data => {
          if (data.status === 'success') {
            Swal.fire({
              title: 'Success',
              icon: 'success',
              text: `${data.message}`
            }).then(()=> {
              window.location.href = "/"
            })
          } else {
            Swal.fire({
              title: 'Error',
              icon: 'error',
              text: `${data.error}`
            })
          }
        }).catch(err => {
          console.error(err)
        })
      }
    })
  }
  return (
    feedbacks.length > 0 && (
      <div className="section-feedback-item container">
        <div className="feedback-container">
          {feedbacks.map((feedback) => (
            <div className="feedback-item-container" key={feedback.id}>
              <p className="feedback-content">{feedback.feedback}</p>
              <span className="point">{feedback.point}</span>
              <div className="action-container">
                <button onClick={() => setSelectedFeedback(feedback)}>
                  <EditFilled />
                </button>
                <button onClick={() => handleDelete(feedback.id)}>
                  <DeleteFilled />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default ListComponent;
