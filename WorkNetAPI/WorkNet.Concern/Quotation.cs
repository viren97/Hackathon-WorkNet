using System;
using System.Collections.Generic;
using System.Text;

namespace WorkNet.Concern {
    public class Quotation {
        public int Id { get; set; }
        public int QuotationRequestId { get; set; }
        public int CompanyId { get; set; }
        public string Description { get; set; }
        public decimal Budget { get; set; }
        public string RelaventProjectIds { get; set; }
    }
}
