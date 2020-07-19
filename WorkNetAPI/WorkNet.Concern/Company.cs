using System;

namespace WorkNet.Concern {
    public class Company {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsVerified { get; set; } = false;
        public string Website { get; set; }
        public int Rating { get; set; }
        public int AddressId { get; set; }
        public int PrimaryContactId { get; set; }
        public int SecondaryContactId { get; set; }
        public string Description { get; set; }
        public string Sector { get; set; }
        public int EmployeeCount { get; set; }
        public DateTime Established { get; set; }
        // Registration Number in 
        public string CIN { get; set; }
        // comma separated
        public string SkillIds { get; set; }
        public string ProjectIds { get; set; }
        public string ClientIds { get; set; }
        public string AwardIds { get; set; }
        public string ProductIds { get; set; }
        public string ReviewIds { get; set; }
        public string ProjectDomains { get; set; }
    }
}
