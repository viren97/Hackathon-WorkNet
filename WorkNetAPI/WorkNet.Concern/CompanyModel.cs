using System;
using System.Collections.Generic;
using System.Text;

namespace WorkNet.Concern {
    public class CompanyModel {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Website { get; set; }
        public Address Address { get; set; }
        public string Description { get; set; }
        public string Sector { get; set; }
        public int EmployeeCount { get; set; }
        public DateTime Established { get; set; }
        // Registration Number in 
        public string CIN { get; set; } 
        public List<string> Skills { get; set; }
    }
}


