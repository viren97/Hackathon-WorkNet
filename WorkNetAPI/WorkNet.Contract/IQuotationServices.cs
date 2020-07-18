using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WorkNet.Concern;

namespace WorkNet.Contract {
    public interface IQuotationServices {
        Task<QuotationRequested> CreateRequest(QuotationRequested qr, string userId);
        Task<QuotationRequested> UpdateRequest(QuotationRequested qr, int id, string userId);
        Task<QuotationRequested> DeleteRequest(int id);
        Task<QuotationRequested> GetRequestById(int id);
        Task<List<QuotationRequested>> GetAllRequest();
    }
}
