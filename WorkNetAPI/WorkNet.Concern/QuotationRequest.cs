using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WorkNet.Concern {
    public class QuotationRequested {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public string Description { get; set; }
        public string SkillIds { get; set; }
        public DateTime Created { get; set; }
        public DateTime ProjectStart { get; set; }
        public DateTime ProjectEnd { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal Budget { get; set; }

    }
}
