// src/components/Department/DeleteDepartment.js
import React from "react";
import { deleteDepartment } from "../../api";
import { useNavigate } from "react-router-dom";

const DeleteDepartment = ({ id }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteDepartment(id);
    navigate("/read-departments"); // Redirect after deletion
  };

  return (
    <div>
      <h2>Are you sure you want to delete this department?</h2>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={() => navigate("/read-departments")}>No</button>
    </div>
  );
};

export default DeleteDepartment;
