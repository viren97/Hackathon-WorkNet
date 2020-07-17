using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WorkNet.Concern;

namespace WorkNet.Provider {
    public class DataProvider : IdentityDbContext<Representative> {
        public DataProvider(DbContextOptions<DataProvider> options) : base(options) {

        }

        public DbSet<Address> Address { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<ContactUs> Contacts { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<ProjectCategory> ProjectCategories { get; set; }
        public DbSet<QuotationRequested> QuotationRequesteds { get; set; }
        public DbSet<Quotation> Quotations { get; set; }
        public DbSet<Review> Reviews { get; set; } 
        public DbSet<Skill> Skills { get; set; }
        public DbSet<Representative> Representatives { get; set; }
    }
}
