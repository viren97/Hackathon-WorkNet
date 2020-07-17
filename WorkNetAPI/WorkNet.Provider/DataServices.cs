using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using WorkNet.Contract;

namespace WorkNet.Provider {
    public class DataServices<T> : IDataServices<T> where T : class {

        private DataProvider Context { get; set; }

        public DataServices(DataProvider context) {
            Context = context;
        }

        public void BulkInsert(List<T> entities) {
            Context.AddRange(entities);
            Context.SaveChanges();
        }

        public List<T> GetAll() {
            return Context.Set<T>().ToList();
        }

        public void Add(T entity) {
            Context.Add(entity);
            Context.SaveChanges();
        }

        public void Delete(int id) {
            var breakdown = Context.Set<T>().Find(id);
            Context.Remove(breakdown);
            Context.SaveChanges();
        }

        public void Update(T entity) {
            Context.Entry(entity).State = EntityState.Modified;
            Context.SaveChanges();
        }

    }


}
