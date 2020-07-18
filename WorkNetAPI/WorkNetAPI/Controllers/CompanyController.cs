using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WorkNet.Concern;
using WorkNet.Contract;

namespace WorkNetAPI.Controllers {
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class CompanyController : ControllerBase {

        private ICompanyServices CompanyServices { get; set; }

        public CompanyController(ICompanyServices companyServices) {
            CompanyServices = companyServices;

        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] CompanyModel company) {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            var data = await CompanyServices.Register(company);

            if (data != null)
                return Created($"api/company/{data.Id}", data);

            return BadRequest();
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public string Get(int id) {
            return "value";
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value) {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id) {
        }
    }
}
