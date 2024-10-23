// src/components/Department/ReadDepartments.js
import React, { useEffect, useState } from "react";
import { fetchDepartments } from "../../api";

const ReadDepartments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const getDepartments = async () => {
      const response = await fetchDepartments();
      setDepartments(response.data);
    };
    getDepartments();
  }, []);

  return (
    <div>
      <h2>Departments</h2>
      <ul>
        {departments.map((dept) => (
          <li key={dept.departmentId}>{dept.departmentName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReadDepartments;
