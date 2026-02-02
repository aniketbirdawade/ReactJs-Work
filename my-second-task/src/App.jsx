import { useState } from "react";
import "./App.css";
import Student from "./Component/Student";

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setage] = useState("");
  const [course, setcourse] = useState("");

  const [students, setStudents] = useState([]);

  const addstud = () => {
    setStudents([...students, { id, name, age, course }]);
    setId("");
    setName("");
    setage("");
    setcourse("");
  };

  return (
    <>
      <div>
        <h3>Student Details</h3>
        <input type="text" placeholder="ID" onChange={(e) => setId(e.target.value)}/>{" "}<br /><br />
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>{" "}<br /><br />
        <input type="text" placeholder="Age" onChange={(e) => setage(e.target.value)}/>{" "}<br /><br />
        <input type="text" placeholder="course" onChange={(e) => setcourse(e.target.value)}/>{" "}<br />

        <button onClick={addstud}>Add Student</button> <br />
        
        <Student students={students} />
      </div>
    </>
  );
}

export default App;
