// src/components/Employee/ReadEmployees.js
import React, { useEffect, useState } from "react";
import { fetchEmployees } from "../../api";

const ReadEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      const response = await fetchEmployees();
      setEmployees(response.data);
    };
    getEmployees();
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} - {emp.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadEmployees;
