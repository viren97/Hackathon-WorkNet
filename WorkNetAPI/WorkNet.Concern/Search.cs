using System;
using System.Collections.Generic;
using System.Text;

namespace WorkNet.Concern {
    public class Search {
        public string Keyword { get; set; }
        public List<int> SkillIds { get; set; }
        public List<string> ProjectDomain { get; set; }
    }
}
