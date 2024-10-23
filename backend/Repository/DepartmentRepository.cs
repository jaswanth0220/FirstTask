using FirstTask.Entities;

namespace FirstTask.Repository
{
    public class DepartmentRepository:IDepartmentRepository
    {
        private EmployeeContext _context;
        public DepartmentRepository(EmployeeContext context)
        {
            _context = context;
        }
        public Department GetDepartmentById(int id)
        {
            return _context.Departments.Find(id);
        }
        public IEnumerable<Department> GetDepartments()
        {
            return _context.Departments.ToList();
        }
        public void AddDepartment(Department department)
        {
            _context.Departments.Add(department);
            _context.SaveChanges();
        }
        public void UpdateDepartment(Department department)
        {
            _context.Departments.Update(department);
            _context.SaveChanges();
        }
        public void DeleteDepartment(int id)
        {
            var department = _context.Departments.Find(id);
            _context.Departments.Remove(department);
            _context.SaveChanges();
        }
    }
}
