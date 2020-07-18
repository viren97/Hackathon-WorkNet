using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WorkNet.Concern;
using WorkNet.Contract;
using WorkNet.Provider;

namespace WorkNetAPI.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class QuotationController : ControllerBase {

        private IQuotationServices QS { get; set; }

        public QuotationController(IQuotationServices qs) {
            QS = qs;

        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> CreateQuotationRequest([FromBody] QuotationRequested qr) {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            var claimsIdentity = this.User.Identity as ClaimsIdentity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.Name)?.Value;


            var data = await QS.Create(qr, userId);

            if (data != null)
                return Created($"api/quotation/{data.Id}", data);

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
