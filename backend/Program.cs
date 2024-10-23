
using FirstTask.Entities;
using FirstTask.Repository;

namespace FirstTask
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddDbContext<EmployeeContext>();
            builder.Services.AddScoped<IEmployeeRepository, EmployeeRepository>();
            builder.Services.AddScoped<IDepartmentRepository, DepartmentRepository>();
            builder.Services.AddControllers();
            builder.Services.AddCors(c =>
            {
                c.AddPolicy("AllowOrigin", options =>
       options.AllowAnyOrigin() //allow any client server
                .AllowAnyMethod() //allow any http method like(get,post,put,delete)
                .AllowAnyHeader() //allow any header like accept,authorize etc
                );
            });
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseCors("AllowOrigin");
            app.UseAuthorization();
           
            app.MapControllers();

            app.Run();
        }
    }
}
