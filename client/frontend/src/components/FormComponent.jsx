import React, { useState } from "react";

function FormComponent() {
  const [ userInput, setUserInput ] = useState({
    point: 0,
    feedback: ''
  })
  const updatePoint = (value) => {
    setUserInput(userInput => ({
      ...userInput,
      point: value
    }))
  }
  const handleInput = (e) => {
    const { value } = e.target;
    setUserInput(userInput => ({
      ...userInput,
      feedback: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.point === 0 || userInput.feedback === '') {
      alert('You have to input both point and feedback')
    } else {
      console.log(userInput);
      fetch("http://localhost:3000/api/v1/feedbacks", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(userInput)
      }).then(res => res.json()).then(data => {
        if (data.status === 'success') {
          alert(`${data.message}`);
          setUserInput({
            point: 0,
            feedback: ''
          })
          window.location.href = '/';
        }
      }).catch(err => console.log(err));
    }
  }
  return (
    <div className="section-feedback-form container">
      <div className="form-container">
        <h1 className="title">Thầy Phú dạy có hay không????</h1>
        <div className="point-container">
          <div className={userInput.point === 1 ? 'point active' : 'point'} onClick={() => updatePoint(1)}>1</div>
          <div className={userInput.point === 2 ? 'point active' : 'point'} onClick={() => updatePoint(2)}>2</div>
          <div className={userInput.point === 3 ? 'point active' : 'point'} onClick={() => updatePoint(3)}>3</div>
          <div className={userInput.point === 4 ? 'point active' : 'point'} onClick={() => updatePoint(4)}>4</div>
          <div className={userInput.point === 5 ? 'point active' : 'point'} onClick={() => updatePoint(5)}>5</div>
          <div className={userInput.point === 6 ? 'point active' : 'point'} onClick={() => updatePoint(6)}>6</div>
          <div className={userInput.point === 7 ? 'point active' : 'point'} onClick={() => updatePoint(7)}>7</div>
          <div className={userInput.point === 8 ? 'point active' : 'point'} onClick={() => updatePoint(8)}>8</div>
          <div className={userInput.point === 9 ? 'point active' : 'point'} onClick={() => updatePoint(9)}>9</div>
          <div className={userInput.point === 10 ? 'point active' : 'point'} onClick={() => updatePoint(10)}>10</div>
        </div>
        <form className="main-form">
          <div className="input-wrapper">
            <input type="text" onChange={handleInput}/>
            <button type="submit" onClick={handleSubmit}>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormComponent;
