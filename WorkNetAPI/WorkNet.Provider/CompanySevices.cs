using System.Runtime.Loader;
using WorkNet.Concern;
using WorkNet.Contract;

namespace WorkNet.Provider {
    public class CompanySevices : ICompanyServices {

        private IDataServices<Company> CompanyDb { get; set; }
        private IDataServices<Skill> SkillDb { get; set; }
        private IDataServices<Address> AddressDb { get; set; }

        public CompanySevices(IDataServices<Company> companyDb, IDataServices<Skill> skillDb, IDataServices<Address> addressDb) {
            CompanyDb = companyDb;
            SkillDb = skillDb;
            AddressDb = addressDb;
        }

        public async Task<Company> Register(CompanyModel companyModel) {
            // add address 
            // add executive 
            // add 



            Company company = new Company()
            {
                Name = companyModel.Name,
                Website = companyModel.Website,
                AddressId = companyModel.Address.Id,
                PrimaryContactId = 
                SecondaryContactId =  
                Description =  
                Sector = 
                EmployeeCount = 
                Established = 
                CIN = 


            }
        }

        public void Update() { }

        public void GetAll() { }

        public void GetById() { }

        public void Delete() { }

    }
}
