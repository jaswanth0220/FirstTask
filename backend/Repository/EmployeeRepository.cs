using FirstTask.Entities;
using FirstTask.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ActionConstraints;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Collections.Generic;
namespace FirstTask.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
      private readonly EmployeeContext _context;
        public EmployeeRepository(EmployeeContext context)
        {
            _context = context;
        }
        public void AddEmployee(Employee employee)
        {
            _context.Employees.Add(employee);
            _context.SaveChanges();
        }

        public void DeleteEmployee(int id)
        {
            _context.Employees.Remove(_context.Employees.Find(id));
            _context.SaveChanges();
        }

        public List<Employee> GetAllEmployees()
        {
           return _context.Employees.ToList();
        }

        public Employee GetEmployeeById(int id)
        {
            return _context.Employees.Find(id);
        }

        public void UpdateEmployee(Employee employee)
        {
           _context.Employees.Update(employee);
            _context.SaveChanges();
        }
    }
}
