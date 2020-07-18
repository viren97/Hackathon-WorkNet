using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using WorkNet.Concern;

namespace WorkNet.Contract
{
    public interface IProjectServices
    {
        Project Add(Project project);
        Project Update(Project project);
        Project Delete(int id);
        List<Project> GetAll();
        Task<Project> GetById(int id);
    }
}
