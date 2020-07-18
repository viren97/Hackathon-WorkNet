using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WorkNet.Concern;

namespace WorkNet.Contract {
    public interface ICompanyServices {
        Task<Company> Register(CompanyModel company);
        void Update();
        void Delete();
        void GetAll();
        void GetById();
    }
}
