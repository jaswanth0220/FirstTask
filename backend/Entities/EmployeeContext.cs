using FirstTask.Models;
using Microsoft.EntityFrameworkCore;

namespace FirstTask.Entities
{
    public class EmployeeContext: DbContext
    {
        private IConfiguration _configuration;
        public EmployeeContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Department> Departments { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_configuration.GetConnectionString("DefaultConnection"));
        }
    }
}
