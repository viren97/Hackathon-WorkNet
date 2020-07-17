using System;
using System.Collections.Generic;
using System.Text;

namespace WorkNet.Concern {
    public class Review {
        public int Id { get; set; }
        public int Rating { get; set; }
        public string Description { get; set; }
        public int ProjectId { get; set; }
        public int ReviewerId { get; set; }
    }
}
