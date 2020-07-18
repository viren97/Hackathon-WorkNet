using System;
using System.Collections.Generic;
using System.Text;
using WorkNet.Concern;
using WorkNet.Contract;

namespace WorkNet.Provider {
    public class CompanySevices  {

        private IDataServices<Company> CompanyDb { get; set; }
        private IDataServices<Skill> SkillDb { get; set; }

        public CompanySevices(IDataServices<Company> companyDb, IDataServices<Skill> skillDb ) {
            CompanyDb = companyDb;
            SkillDb = skillDb;
        }

        public void Register(CompanyModel company) {
            
        }





    }
}
