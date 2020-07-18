using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WorkNet.Concern;
using WorkNet.Contract;

namespace WorkNet.Provider {
    public class AuthServices : IAuthServices {

        private readonly UserManager<User> @UserManager = null;
        public AuthServices(UserManager<User> usermanager) {
            UserManager = usermanager;
        }

        public async Task<AppUser> Register(ExecutiveRegistration representative) {
            var userName = await UserManager.FindByEmailAsync(representative.Email);
            if (userName != null) {
                return new AppUser() { ErrorMessage = "Email already Exsit" };
            }

            var user = new User()
            {
                UserName = representative.Email,
                Email = representative.Email,
                Firstname = representative.Firstname,
                Lastname = representative.Lastname,
                PhoneNumber = representative.Mobile
            };
            var result = await UserManager.CreateAsync(user, representative.Password);
            if (result.Succeeded) {

                return await Login(new Auth { Email = representative.Email, Password = representative.Password });
            }

            AppUser appUser = new AppUser();
            foreach (var error in result.Errors) {
                appUser.ErrorMessage = "\n" + error.Description;
            }

            return appUser;

        }

        public async Task<AppUser> Login(Auth auth) {

            var user = await UserManager.FindByEmailAsync(auth.Email);
            if (user != null && await UserManager.CheckPasswordAsync(user, auth.Password)) {
                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub, auth.Email),
                };
                var signinkey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("c2FudGhvc2g=fadifhaiduhda"));
                var token = new JwtSecurityToken(
                    issuer: "http://oec.com",
                    audience: "http://oec.com",
                    expires: DateTime.UtcNow.AddDays(7),
                    claims: claims,
                    signingCredentials: new SigningCredentials(signinkey, SecurityAlgorithms.HmacSha256)
                    );
                return new AppUser
                {
                    IsVerified = true,
                    Token = new JwtSecurityTokenHandler().WriteToken(token),
                    Expiry = token.ValidTo
                };
            }

            return new AppUser();

        }


        public string GenerateToken(string email) {
            var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub, email),
                };
            var signinkey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("c2FudGhvc2g="));
            var token = new JwtSecurityToken(
                issuer: "http://oec.com",
                audience: "http://oec.com",
                expires: DateTime.UtcNow.AddDays(7),
                claims: claims,
                signingCredentials: new SigningCredentials(signinkey, SecurityAlgorithms.HmacSha256)
                );

            return new JwtSecurityTokenHandler().WriteToken(token);

        }
    }
}
