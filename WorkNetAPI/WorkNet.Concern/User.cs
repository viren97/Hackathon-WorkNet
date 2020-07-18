
using Microsoft.AspNetCore.Identity;

namespace WorkNet.Concern {
    public class User  : IdentityUser {
      
        public string Firstname { get; set; }
        public string Lastname { get; set; }

        public User() {

        }
     
    }
}
