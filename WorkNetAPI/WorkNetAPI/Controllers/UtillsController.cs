using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkNet.Concern;
using WorkNet.Provider;

namespace WorkNetAPI.Controllers {
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class UtillsController : ControllerBase {

        private DataProvider Db { get; set; }

        public UtillsController(DataProvider db) {
            Db = db;
        }

        [Authorize]
        public IActionResult GetSkills() {
            return Ok(Db.Skills.ToList());
        }

        [HttpPost]
        public IActionResult ContactUs([FromBody] ContactUs contact) {
            Db.Contacts.Add(contact);
            Db.SaveChanges();
            return Created("", contact);

        }

        [Authorize]
        [HttpGet]
        public IActionResult GetAllContactUs() {
            return Ok(Db.Contacts.ToList());
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetCompanyDetails(Search search) {

            try {
                var companies = Db.Companies.Where(c =>
                c.Name.Contains(search.Keyword) ||
                search.SkillIds.Where(s => c.SkillIds.Contains(s.ToString())).Count() > 0 ||
                search.ProjectDomain.Where(d => c.ProjectDomains.Contains(d)).Count() > 0
              );

                List<CompanyDetail> CompanyDetails = new List<CompanyDetail>();

                var companydetails = new CompanyDetail();
                foreach (var company in companies) {
                    companydetails.Executive = await Db.Executives.FirstOrDefaultAsync(e => e.CompanyId == company.Id);
                    if (companydetails.Executive == null)
                        continue;
                    companydetails.Company = company;
                    companydetails.Skills = await Db.Skills.Where(s => company.SkillIds.Contains(s.Id.ToString())).ToListAsync();
                    companydetails.Projects = await Db.Projects.Where(p => p.VendorId == company.Id).ToListAsync();
                    CompanyDetails.Add(companydetails);
                }

                return Ok(CompanyDetails);
            } catch(Exception ex) {
                return BadRequest();
            }
           
          

        }


    }
}
