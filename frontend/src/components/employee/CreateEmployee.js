// src/components/Employee/CreateEmployee.js
import React, { useState, useEffect } from "react";
import { createEmployee, fetchDepartments } from "../../api";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [departments, setDepartments] = useState([]);

  // Fetch departments when the component mounts
  useEffect(() => {
    const getDepartments = async () => {
      try {
        const response = await fetchDepartments();
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };
    getDepartments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEmployee({ name, role, departmentId });
    // Optionally redirect or show success message here
    // Reset form fields
    setName("");
    setRole("");
    setDepartmentId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      />
      <select
        value={departmentId}
        onChange={(e) => setDepartmentId(e.target.value)}
        required
      >
        <option value="" disabled>Select Department</option>
        {departments.map((dept) => (
          <option key={dept.departmentId} value={dept.departmentId}>
            {dept.departmentName}
          </option>
        ))}
      </select>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default CreateEmployee;