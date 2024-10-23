// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEmployee from './components/employee/CreateEmployee';
import ReadEmployees from './components/employee/ReadEmployee';
import UpdateEmployee from './components/employee/UpdateEmployee';
import DeleteEmployee from './components/employee/DeleteEmployee'; // Optional if needed

import CreateDepartment from './components/department/CreateDepartment';
import ReadDepartments from './components/department/ReadDepartment';
import UpdateDepartment from './components/department/UpdateDepartment';
// import DeleteDepartment from './components/Department/DeleteDepartment'; // Optional if needed

function App() {
    return (
        <Router>
            <div className="App">
                <h1>CRUD Operations</h1>
                <Routes>
                    {/* Employee Routes */}
                    <Route path="/create-employee" element={<CreateEmployee />} />
                    <Route path="/read-employees" element={<ReadEmployees />} />
                    <Route path="/update-employee/:id" element={<UpdateEmployee />} />
                    {/* Optional: Add a route for deleting an employee */}
                    {/* <Route path="/delete-employee/:id" element={<DeleteEmployee />} /> */}

                    {/* Department Routes */}
                    <Route path="/create-department" element={<CreateDepartment />} />
                    <Route path="/read-departments" element={<ReadDepartments />} />
                    <Route path="/update-department/:id" element={<UpdateDepartment />} />
                    {/* Optional: Add a route for deleting a department */}
                    {/* <Route path="/delete-department/:id" element={<DeleteDepartment />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;