using System;
using System.Collections.Generic;
using System.Text;

namespace WorkNet.Concern {
    public class AppUser {
        public string Token { get; set; }
        public bool IsVerified { get; set; } = false;
        public DateTime Expiry { get; set; }
        public string ErrorMessage { get; set; }
    }
}
