using System;
using System.Collections.Generic;
using System.Text;

namespace WorkNet.Contract {

    public interface IDataServices<T> where T : class {
        List<T> GetAll();
        void Add(T entity);
        void Delete(int id);
        void Update(T entity);
        void BulkInsert(List<T> entities);
    }
}
