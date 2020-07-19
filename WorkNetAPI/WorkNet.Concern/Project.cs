using System;
using System.Collections.Generic;
using System.Text;

namespace WorkNet.Concern {
    public class Project {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int ClientId { get; set; }
        public int VendorId { get; set; }
        public ProjectStatus Status { get; set; }
        public int ReviewId { get; set; }
        public string TechnologyIds { get; set; }
        public decimal Cost { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public string Domain { get; set; }
    }
}
