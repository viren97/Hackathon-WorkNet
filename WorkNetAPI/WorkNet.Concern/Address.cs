﻿using System;
using System.Collections.Generic;
using System.Text;

namespace WorkNet.Concern {
    public class Address {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public string Line1 { get; set; }
        public string Line2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string LandLine { get; set; }
        public string Zip { get; set; }
    }
}
