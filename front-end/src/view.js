import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/users/rec")
      .then((res) =>  setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  return (
    <div className="App">
      <h1>Image uploading react</h1>
     <img src="http://localhost:3001/static/09af9582-c7ed-42e8-872a-ac7927724475-1660720832314.PNG" alt="image"></img>
    </div>
  );
}

export default App;