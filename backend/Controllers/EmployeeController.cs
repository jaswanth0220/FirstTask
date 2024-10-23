using FirstTask.Models;
using FirstTask.Repository;
using Microsoft.AspNetCore.Mvc;

namespace FirstTask.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository; 
        }
        [HttpGet]
        public IActionResult GetAllEmployees()
        {

           var employees = _employeeRepository.GetAllEmployees();
            return Ok(employees);
        }
        [HttpGet("{id}")]
        public IActionResult GetEmployeeById(int id)
        {
            var employee = _employeeRepository.GetEmployeeById(id);
            return Ok(employee);
        }

        [HttpPost]
        public IActionResult AddEmployee([FromBody] Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); 
            }

            _employeeRepository.AddEmployee(employee);
            return CreatedAtAction(nameof(GetEmployeeById), new { id = employee.Id }, employee);
        }

        [HttpPut]
        public IActionResult UpdateEmployee(Employee employee)
        {
            _employeeRepository.UpdateEmployee(employee);
            return Ok(employee);
        }
        [HttpDelete]
        public IActionResult DeleteEmployee(int id)
        {
            _employeeRepository.DeleteEmployee(id);
            return NoContent();
        }

    }
}
