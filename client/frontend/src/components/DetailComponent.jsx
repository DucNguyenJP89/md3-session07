import React from "react";
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import Swal from 'sweetalert2';

function DetailComponent({feedback, getSelectedFeedback}) {
  const handleDelete = () => {
    Swal.fire({
      title: 'Delete',
      icon: 'warning',
      text: 'Are you sure you want to delete this feedaback?',
      showCancelButton: true
    }).then(res => {
      if (res.isConfirmed) {
        fetch(`http://localhost:3000/api/v1/feedbacks/${feedback.id}`, {
          method: 'DELETE'
        }).then(res => res.json()).then(data => {
          if (data.status === 'success') {
            Swal.fire({
              title: 'Success',
              icon: 'success',
              text: `${data.message}`
            }).then(()=> {
              window.location.href = "http://localhost:3001/"
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
    <div className="feedback-item-container">
      <p className="feedback-content">{feedback.feedback}</p>
      <span className="point">{feedback.point}</span>
      <div className="action-container">
        <button onClick={() => getSelectedFeedback(feedback)}><EditFilled /></button>
        <button onClick={handleDelete}><DeleteFilled /></button>
      </div>
    </div>
  );
}

export default DetailComponent;
