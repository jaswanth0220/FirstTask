// src/components/Department/UpdateDepartment.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDepartments, updateDepartment } from "../../api";

const UpdateDepartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [departmentName, setDepartmentName] = useState("");

  useEffect(() => {
    const getDepartment = async () => {
      const response = await fetchDepartments();
      const dept = response.data.find(
        (dept) => dept.departmentId === parseInt(id)
      );
      setDepartmentName(dept.departmentName);
    };
    getDepartment();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDepartment(id, { departmentName });
    navigate("/read-departments"); // Redirect after update
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
      <button type="submit">Update Department</button>
    </form>
  );
};

export default UpdateDepartment;
