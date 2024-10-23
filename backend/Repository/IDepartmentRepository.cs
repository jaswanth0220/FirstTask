using FirstTask.Entities;

namespace FirstTask.Repository
{
    public interface IDepartmentRepository
    {
        public Department GetDepartmentById(int id);
        public IEnumerable<Department> GetDepartments();
        public void AddDepartment(Department department);
        public void UpdateDepartment(Department department);
        public void DeleteDepartment(int id);
    }
}
