using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace WorkNet.Provider {
    public class AuthenticationServices {

        private static readonly string Secret = "c2FudGhvc2g=";


        public AuthenticationServices() { }


        public static string GenerateToken(string userName) {

            byte[] Key = Encoding.UTF32.GetBytes(Secret);
            SymmetricSecurityKey SecurityKey = new SymmetricSecurityKey(Key);
            SecurityTokenDescriptor Descriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Name, userName) }),
                Expires = DateTime.UtcNow.AddMinutes(30),
                SigningCredentials = new SigningCredentials(SecurityKey, SecurityAlgorithms.HmacSha256Signature)
            };
            JwtSecurityTokenHandler Handler = new JwtSecurityTokenHandler();
            JwtSecurityToken Token = Handler.CreateJwtSecurityToken(Descriptor);
            return Handler.WriteToken(Token);
        }
    }
}
