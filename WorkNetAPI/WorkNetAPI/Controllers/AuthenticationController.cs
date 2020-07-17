using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WorkNet.Concern;
using WorkNet.Contract;

namespace WorkNetAPI.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase {

        private IAuthServices AuthServices { get; set; }

        public AuthenticationController(IAuthServices authServices) {
            AuthServices = authServices;
        }

        [HttpPost]
        public async Task<IActionResult> Register(RepRegister rep) {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            var appUser = await AuthServices.Register(rep);

            if (appUser.IsVerified)
                return Created("", appUser);
          
            return BadRequest(appUser);
        }

        [HttpPost]
        public async Task<IActionResult> Login(Auth auth) {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            var appUser = await AuthServices.Login(auth);

            if (appUser.IsVerified)
                return Ok(appUser);
            return Unauthorized();

        }


    }
}
