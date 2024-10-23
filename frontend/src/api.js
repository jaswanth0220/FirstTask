// src/api.js
import axios from "axios";

const API_URL = "http://localhost:5057/api"; // Replace with your actual API URL

export const fetchEmployees = () => axios.get(`${API_URL}/employee`);
export const createEmployee = (employee) =>
  axios.post(`${API_URL}/employee`, employee);
export const updateEmployee = (id, employee) =>
  axios.put(`${API_URL}/employee/${id}`, employee);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/employee/${id}`);

export const fetchDepartments = () => axios.get(`${API_URL}/department`);
export const createDepartment = (department) =>
  axios.post(`${API_URL}/department`, department);
export const updateDepartment = (id, department) =>
  axios.put(`${API_URL}/department/${id}`, department);
export const deleteDepartment = (id) =>
  axios.delete(`${API_URL}/department/${id}`);
