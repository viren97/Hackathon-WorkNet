using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using WorkNet.Concern;
using WorkNet.Contract;
using WorkNet.Provider;

namespace WorkNetAPI {
    public class Startup {

        readonly string AllowSpecificOrigins = "_allowSpecificOrigins";

        public Startup(IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services) {

            services.AddDbContext<DataProvider>(options =>
                options.UseSqlServer(
                    Configuration.GetConnectionString("connection")));

            services.AddControllers();
            services.AddScoped<IDataServices<Company>, DataServices<Company>>();
            services.AddScoped<IDataServices<Address>, DataServices<Address>>();
            services.AddScoped<IDataServices<ContactUs>, DataServices<ContactUs>>();
            services.AddScoped<IDataServices<Project>, DataServices<Project>>();
            services.AddScoped<IDataServices<ProjectCategory>, DataServices<ProjectCategory>>();
            services.AddScoped<IDataServices<Quotation>, DataServices<Quotation>>();
            services.AddScoped<IDataServices<QuotationRequested>, DataServices<QuotationRequested>>();
            services.AddScoped<IDataServices<Representative>, DataServices<Representative>>();
            services.AddScoped<IDataServices<Review>, DataServices<Review>>();
            services.AddScoped<IDataServices<Skill>, DataServices<Skill>>();
            services.AddScoped<ICompanyServices, CompanySevices>();
            services.AddScoped<IEmailServices, EmailServices>();
            services.AddScoped<IProjectServices, ProjectServices>();
            services.AddScoped<IQuotationServices, QuotationServices>();
            services.AddScoped<DataProvider, DataProvider>();

            services.AddIdentity<Representative, IdentityRole>()
              .AddEntityFrameworkStores<DataProvider>()
              .AddDefaultTokenProviders();

            services.AddCors(options =>
                options.AddPolicy(AllowSpecificOrigins, builder =>
                {
                    builder.WithOrigins("https://localhost:44320")
                    .AllowAnyHeader()
                    .AllowAnyMethod();

                }));

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
         .AddJwtBearer(options =>
         {
             options.SaveToken = true;
             options.RequireHttpsMetadata = false;
             options.TokenValidationParameters = new TokenValidationParameters()
             {
                 ValidateIssuer = true,
                 ValidateAudience = true,
                 ValidIssuer = "http://oec.com",
                 ValidAudience = "http://oec.com",
                 IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("MySuperSecureKey"))
             };
         });


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(AllowSpecificOrigins);

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
