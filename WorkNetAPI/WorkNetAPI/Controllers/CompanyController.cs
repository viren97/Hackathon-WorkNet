using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;
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

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Register([FromBody] CompanyModel company) {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            var claimsIdentity = this.User.Identity as ClaimsIdentity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.Name)?.Value;


            var data = await CompanyServices.Register(company, userId);

            if (data != null)
                return Created($"api/company/{data.Id}", data);

            return BadRequest();
        }

        // GET api/<ValuesController>/5
        [Authorize]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id) {
            return Ok(await CompanyServices.GetById(id));
        }

        // PUT api/<ValuesController>/5
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] CompanyModel cm) {
            return Ok(await CompanyServices.Update(cm));

        }

        // DELETE api/<ValuesController>/5
        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id) {
            return Ok(CompanyServices.Delete(id));
        }
    }
}
