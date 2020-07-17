using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WorkNet.Concern {
    public class Quotation {
        public int Id { get; set; }
        public int QuotationRequestId { get; set; }
        public int CompanyId { get; set; }
        public string Description { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal Budget { get; set; }
        public string RelaventProjectIds { get; set; }
    }
}
