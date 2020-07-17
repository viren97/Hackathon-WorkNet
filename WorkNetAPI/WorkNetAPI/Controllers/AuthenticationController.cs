using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WorkNet.Concern;

namespace WorkNetAPI.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase {
        private readonly UserManager<Representative> userManager;

        public AuthenticationController(UserManager<Representative> userManager) {
            this.userManager = userManager;
        }
        //[HttpPost]
        //public async Task<IActionResult> Register(RegisterRequest model) {
        //    if (!ModelState.IsValid) {
        //        return BadRequest(ModelState);
        //    }
        //    var userName = await userManager.FindByEmailAsync(model.Email);
        //    if (userName != null) {
        //        return BadRequest(new
        //        {
        //            error = "Email is already being used by another account"
        //        });
        //    }
        //    var user = new ApplicationUser() { UserName = model.Email, Email = model.Email, Name = model.Name, PhoneNumber = model.PhoneNumber };
        //    var result = await userManager.CreateAsync(user, model.Password);
        //    if (result.Succeeded) {
        //        LoginRequest loginmodel = new LoginRequest();
        //        loginmodel.Email = model.Email;
        //        loginmodel.Password = model.Password;
        //        return await Login(loginmodel);
        //    }
        //    foreach (var error in result.Errors) {
        //        ModelState.AddModelError("", error.Description);
        //    }
        //    return BadRequest(model);
        //}
        [HttpPost]
        public async Task<IActionResult> Login(Auth auth) {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            //var user = await userManager.FindByNameAsync(model.Email);
            var user = await userManager.FindByEmailAsync(auth.Email);
            if (user != null && await userManager.CheckPasswordAsync(user, auth.Password)) {
                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                };
                var signinkey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("MySuperSecureKey"));
                var token = new JwtSecurityToken(
                    issuer: "http://oec.com",
                    audience: "http://oec.com",
                    expires: DateTime.UtcNow.AddDays(7),
                    claims: claims,
                    signingCredentials: new Microsoft.IdentityModel.Tokens.SigningCredentials(signinkey, SecurityAlgorithms.HmacSha256)
                    );
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                });
            }
            return Unauthorized();
        }


    }
}
