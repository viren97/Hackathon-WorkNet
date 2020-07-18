using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WorkNet.Concern;

namespace WorkNet.Contract {
    public interface ICompanyServices {
        Task<Company> Register(CompanyModel company, string userId);
        Task<Company> Update(CompanyModel cm);
        Company Delete(int id);
        List<Company> GetAll();
        Task<Company> GetById(int id);
    }
}
