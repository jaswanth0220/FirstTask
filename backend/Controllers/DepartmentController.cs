using FirstTask.Entities;
using FirstTask.Repository;
using Microsoft.AspNetCore.Mvc;

namespace FirstTask.Controllers
{

        [ApiController]
        [Route("api/[controller]")]
        public class DepartmentController : ControllerBase
        {
            private readonly IDepartmentRepository _departmentRepository;

            public DepartmentController(IDepartmentRepository departmentRepository)
            {
                _departmentRepository = departmentRepository;
            }
            [HttpGet]
            public IActionResult GetAllDepartments()
            {

                var departments = _departmentRepository.GetDepartments();
                return Ok(departments);
            }
            [HttpGet("{id}")]
            public IActionResult GetDepartmentById(int id)
            {
                var department = _departmentRepository.GetDepartmentById(id);
                return Ok(department);
            }
            [HttpPost]
            public IActionResult AddDepartment(Department department)
            {
                _departmentRepository.AddDepartment(department);
                return Ok(department);
            }
            [HttpPut]
            public IActionResult UpdateDepartment(Department department)
            {
                _departmentRepository.UpdateDepartment(department);
                return Ok(department);
            }
            [HttpDelete]
            public IActionResult DeleteDepartment(int id)
            {
                _departmentRepository.DeleteDepartment(id);
                return NoContent();
            }

        }
    }

