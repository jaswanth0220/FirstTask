// src/components/Employee/UpdateEmployee.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchEmployees, updateEmployee } from "../../api";

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    role: "",
    departmentId: "",
  });

  useEffect(() => {
    const getEmployee = async () => {
      const response = await fetchEmployees();
      const emp = response.data.find((emp) => emp.id === parseInt(id));
      setEmployee(emp);
    };
    getEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEmployee(id, employee);
    navigate("/read-employees"); // Redirect after update
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={employee.name}
        onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Role"
        value={employee.role}
        onChange={(e) => setEmployee({ ...employee, role: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Department ID"
        value={employee.departmentId}
        onChange={(e) =>
          setEmployee({ ...employee, departmentId: e.target.value })
        }
        required
      />
      <button type="submit">Update Employee</button>
    </form>
  );
};

export default UpdateEmployee;
