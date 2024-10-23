// src/components/Department/CreateDepartment.js
import React, { useState } from "react";
import { createDepartment } from "../../api";

const CreateDepartment = () => {
  const [departmentName, setDepartmentName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDepartment({ departmentName });
    // Optionally redirect or show success message here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Department Name"
        value={departmentName}
        onChange={(e) => setDepartmentName(e.target.value)}
        required
      />
      <button type="submit">Add Department</button>
    </form>
  );
};

export default CreateDepartment;
