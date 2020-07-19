using System;
using System.Collections.Generic;
using System.Text;

namespace WorkNet.Concern {
    public class CompanyDetail {
        public Executive @Executive { get; set; }
        public Company @Company { get; set; }
        public List<Skill> Skills { get; set; }
        public List<Project> Projects { get; set; }
    }
}
