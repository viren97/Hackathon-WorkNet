using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkNet.Concern;
using WorkNet.Contract;

namespace WorkNet.Provider {
    public class CompanyServices : ICompanyServices {

        public DataProvider Db { get; set; }
        public UserManager<User> @UserManager { get; set; }
        public dynamic user { get; set; }


        public CompanyServices(DataProvider db, UserManager<User> usermanager) {
            Db = db;
            UserManager = usermanager;
        }


        public async Task<Company> Register(CompanyModel cm, string userId) {
            try {
                var user = await UserManager.FindByIdAsync(userId);


                var dbskills = Db.Skills.Select(s => s.Name).ToList();
                var skills = cm.Skills.Where(s => !dbskills.Contains(s)).Select(s => new Skill() { Name = s });

                await Db.AddRangeAsync(skills);

              


                var company = new Company()
                {
                    Name = cm.Name,
                    Website = cm.Website,
                    CIN = cm.CIN,
                    Description = cm.Description,
                    Sector = cm.Sector,
                    EmployeeCount = cm.EmployeeCount,
                    Established = cm.Established,
                    SkillIds = string.Join(", ", skills.Select(s => s.Id))
                };

                var executive = new Executive()
                {
                    CompanyId = company.Id,
                    Firstname = user.Firstname,
                    Lastname = user.Lastname,
                    Email = user.Email,
                    Mobile = user.PhoneNumber,
                };

                await Db.AddAsync(executive);
                await Db.AddAsync(company);
                cm.Address.CompanyId = company.Id;
                await Db.AddAsync(cm.Address);

                return company;
            }
            catch (Exception ex) {
                return null;
            }

        }

        public async Task<Company> Update(CompanyModel cm, int id) {
            try {

                var company = Db.Companies.Find(id);
                if (company == null)
                    return null;

                var skills = cm.Skills.Select(s => new Skill() { Name = s });

                await Db.Skills.AddRangeAsync(skills);
                var skillIds = string.Join(", ", skills.Select(s => s.Id));
                company.Name = cm.Name;
                company.Website = cm.Website;
                company.CIN = cm.CIN;
                company.Description = cm.Description;
                company.Sector = cm.Sector;
                company.EmployeeCount = cm.EmployeeCount;
                company.Established = cm.Established;
                company.SkillIds += $", {skillIds}";

                Db.Update(company);

                return company;
            }
            catch (Exception ex) {
                return null;
            }
        }

        public List<Company> GetAll() {
            try {
                return Db.Companies.ToList();
            }
            catch (Exception ex) {
                return null;
            }
        }

        public async Task<Company> GetById(int id) {
            try {
                return await Db.Companies.FirstOrDefaultAsync(c => c.Id == id);
            }
            catch (Exception ex) {
                return null;
            }
        }

        public Company Delete(int id) {
            try {
                var company = Db.Companies.Find(id);
                Db.Companies.Remove(company);
                return company;
            }
            catch (Exception ex) {
                return null;
            }


        }

    }
}
