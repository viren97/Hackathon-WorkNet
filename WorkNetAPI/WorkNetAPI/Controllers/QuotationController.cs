using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;
using WorkNet.Concern;
using WorkNet.Contract;
using WorkNet.Provider;

namespace WorkNetAPI.Controllers {
    [Route("api/[controller]/[Action]")]
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


            var data = await QS.CreateRequest(qr, userId);

            if (data != null)
                return Created($"api/quotation/{data.Id}", data);

            return BadRequest();
        }

        // GET api/<ValuesController>/5
        [Authorize]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id) {
            return Ok(await QS.GetRequestById(id));
        }

        // PUT api/<ValuesController>/5
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] QuotationRequested qr) {
            var claimsIdentity = this.User.Identity as ClaimsIdentity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.Name)?.Value;
            return Ok(await QS.UpdateRequest(qr, id, userId));

        }

        // DELETE api/<ValuesController>/5
        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id) {
            return Ok(QS.DeleteRequest(id));
        }


        [Authorize]
        [HttpPost]
        public async Task<IActionResult> CreateQuotation([FromBody] Quotation qs) {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            var claimsIdentity = this.User.Identity as ClaimsIdentity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.Name)?.Value;


            var data = await QS.Create(qs, userId);

            if (data != null)
                return Created($"api/quotation/{data.Id}", data);

            return BadRequest();
        }

        // GET api/<ValuesController>/5
        [Authorize]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetQuotation(int id) {
            return Ok(await QS.GetById(id));
        }

        // PUT api/<ValuesController>/5
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutQuotation(int id, [FromBody] Quotation qs) {
            var claimsIdentity = this.User.Identity as ClaimsIdentity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.Name)?.Value;
            return Ok(await QS.Update(qs, id, userId));

        }

        // DELETE api/<ValuesController>/5
        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult DeleteQuotation(int id) {
            return Ok(QS.Delete(id));
        }



    }
}
