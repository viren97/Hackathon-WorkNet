using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
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
            return Created("", Db.Contacts.Add(contact));

        }

        [Authorize]
        [HttpGet]
        public IActionResult GetAllContactUs() {
            return Ok(Db.Contacts.ToList());
        }


    }
}
