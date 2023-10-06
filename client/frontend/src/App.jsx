import "./App.css";
import { useEffect, useState } from "react";
import FormComponent from "./components/FormComponent";
import TotalComponent from "./components/TotalComponent";
import ListComponent from "./components/ListComponent";


function App() {
  const [ feedbacks, setFeedbacks ] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/feedbacks")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data.feedbacks);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
  <div className="App">
    <div className="Navbar">Feedback TA</div>
    <FormComponent />
    <TotalComponent feedbacks={feedbacks}/>
    <ListComponent feedbacks={feedbacks}/>
  </div>);
}

export default App;
