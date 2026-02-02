import React from "react";
import Table2 from "./Table2";

const ShowAll = () => {
  let employees = [
    { id: 101, name: "Ram", role: "Developer", salary: 20000 },
    { id: 102, name: "Shyam", role: "Tester", salary: 18000 },
    { id: 103, name: "Amit", role: "Manager", salary: 35000 },
    { id: 104, name: "Rohit", role: "Developer", salary: 25000 },
    { id: 105, name: "Neha", role: "Designer", salary: 22000 },
    { id: 106, name: "Pooja", role: "HR", salary: 28000 },
    { id: 107, name: "Kiran", role: "Tester", salary: 19000 },
    { id: 108, name: "Anil", role: "Developer", salary: 30000 },
    { id: 109, name: "Sneha", role: "Support", salary: 17000 },
    { id: 110, name: "Vikas", role: "Manager", salary: 40000 },
  ];
  // employees.map((emp) => {
  //     console.log(emp)
  // })

  return (
    <div>
      <h3>All Employee</h3>
      <Table2 employees={employees} />
    </div>
  );
};

export default ShowAll;
