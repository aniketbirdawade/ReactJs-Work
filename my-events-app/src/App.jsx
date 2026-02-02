import { useState } from "react";
import "./App.css";

function App() {
  let [name, setName] = useState("");

  let [form, setForm] = useState({ id: "", name: "", salary: "" });

  const handleSend = () => {
    console.log("Hello from Send Button1");
    console.log("Hello from Send Button2");
    console.log("Hello from Send Button3");
    console.log("Hello from Send Button4");
  };

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
    console.log(e.target.name);
  };

  function handleSubmit(emp) {
    emp.preventDefault();
    console.log("form submitted..");

    console.log(form);
  }

  // const handleId = (x) => {
  //   setForm({ ...form, id: x.target.value });
  // };
  // const handleName = (y) => {
  //   setForm({ ...form, name: y.target.value });
  // };
  // const handleSalary = (z) => {
  //   setForm({ ...form, salary: z.target.value });
  // };

  const handleForm = (e) => {
    let {name, value} = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <h2>
        {" "}
        Enter your Name :{" "}
        <input type="text" name="user" onChange={handleChange} />
      </h2>

      <h1>Welcome to my Events App..{name}</h1>

      <button onClick={handleSend}>Send More Data </button>
      <button onClick={() => console.log("Hello from Send Button")}>
        Send single Data
      </button>

      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        id :{" "}
        <input type="text" name="id" value={form.id} onChange={handleForm} />{" "}
        <br />
        name :{" "}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleForm}
        />{" "}
        <br />
        salary :{" "}
        <input
          type="text"
          name="salary"
          value={form.salary}
          onChange={handleForm}
        />{" "}
        <br />
        <button type="submit">Add Employee</button>
      </form>
    </>
  );
}

export default App;
