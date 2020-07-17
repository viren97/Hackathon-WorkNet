
using Microsoft.AspNetCore.Identity;

namespace WorkNet.Concern {
    public class Representative  : IdentityUser {
      
        public string Name { get; set; }

        public Representative() {

        }
     
    }
}
