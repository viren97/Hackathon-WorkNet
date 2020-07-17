
using Microsoft.AspNetCore.Identity;

namespace WorkNet.Concern {
    public class Representative  : IdentityUser {
      
        public string Firstname { get; set; }
        public string Lastname { get; set; }

        public Representative() {

        }
     
    }
}
