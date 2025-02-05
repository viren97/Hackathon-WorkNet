﻿using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WorkNet.Concern;
using WorkNet.Contract;

namespace WorkNet.Provider
{
    public class ProjectServices : IProjectServices
    {
        public DataProvider Db { get; set; }
        public UserManager<User> @UserManager { get; set; }
        public dynamic user { get; set; }

        public ProjectServices(DataProvider db, UserManager<User> usermanager)
        {
            Db = db;
            UserManager = usermanager;
        }
        public List<Project> GetAll()
        {
            try
            {

                return Db.Projects.ToList();
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public async Task<Project> GetById(int id)
        {
            try
            {
                return await Db.Projects.FirstOrDefaultAsync(c => c.Id == id);
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public Project Delete(int id)
        {
            try
            {
                var project = Db.Projects.Find(id);
                Db.Projects.Remove(project);
                Db.SaveChangesAsync();

                return project;
            }
            catch (Exception ex)
            {
                return null;
            }


        }
        public  Project Update(Project concern)
        {
            try
            {
                var project = Db.Projects.Find(concern.Id);

                project.Domain = concern.Domain;
                project.Description = concern.Description;
                project.End = concern.End;
                project.Start = concern.Start;
                project.TechnologyIds = concern.TechnologyIds;
                
                Db.Projects.Update(project);
                Db.SaveChangesAsync();


                return project;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public Project Add(Project concern)
        {
            try {
                var company = Db.Companies.Find(concern.VendorId);
                if (company == null) {
                    return null;
                }

                company.ProjectDomains = company.ProjectDomains + "," + concern.Domain;
                Db.Add(concern);
                Db.Update(company);
                Db.SaveChangesAsync();

                return concern;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

       


    }
}
