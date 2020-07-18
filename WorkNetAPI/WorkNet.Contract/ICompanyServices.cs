using System;
using System.Collections.Generic;
using System.Text;

namespace WorkNet.Contract {
    public interface ICompanyServices {
        void Register();
        void Update();
        void Delete();
        void GetAll();
        void GetById();
    }
}
