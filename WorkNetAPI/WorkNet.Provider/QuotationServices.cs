using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using WorkNet.Concern;
using WorkNet.Contract;

namespace WorkNet.Provider {
    public class QuotationServices : IQuotationServices {

        private DataProvider Db { get; set; }
        private UserManager<User> @UserManager { get; set; }

        public QuotationServices(DataProvider db, UserManager<User> usermanager) {
            Db = db;
            UserManager = usermanager;

        }

        public async Task<QuotationRequested> CreateRequest(QuotationRequested qr, string userId) {
            try {
                var user = await UserManager.FindByIdAsync(userId);
                var executive = await Db.Executives.FirstOrDefaultAsync(e => e.Email == user.Email);
                if (executive == null)
                    return null;

                qr.CompanyId = executive.Id;
                await Db.AddAsync(qr);
                return qr;
            }
             catch(Exception ex) {
                return null;
            }
        }

        public async Task<QuotationRequested> UpdateRequest(QuotationRequested qr, int id, string userId) {
            try {
                var dbQr = await Db.QuotationRequesteds.FindAsync(id);
                var user = await UserManager.FindByIdAsync(userId);
                var executive = await Db.Executives.FirstOrDefaultAsync(e => e.Email == user.Email);


                if (dbQr == null && dbQr.CompanyId != qr.CompanyId && qr.CompanyId != executive.CompanyId) {
                    return null;
                }

                dbQr.Description = qr.Description;
                dbQr.SkillIds = qr.SkillIds;
                dbQr.Budget = qr.Budget;
                dbQr.ProjectEnd = dbQr.ProjectEnd;
                dbQr.ProjectStart = dbQr.ProjectStart;

                Db.Update(dbQr);

                return dbQr;

            }
            catch(Exception ex) {
                return null;
            }

        }

        public async Task<QuotationRequested> GetRequestById(int id) {
            try {
                return await Db.QuotationRequesteds.FindAsync(id);
            }
            catch(Exception ex) {
                return null;
            }


        }

        public async Task<List<QuotationRequested>> GetAllRequest() {

            try {
                return await Db.QuotationRequesteds.ToListAsync();
            } catch(Exception ex) {
                return null;
            }

        }

        public async Task<QuotationRequested> DeleteRequest(int id) {
            try {
                var qr = await Db.QuotationRequesteds.FindAsync(id);
                var quotationsForQR =  Db.Quotations.Where(q => q.QuotationRequestId == qr.Id).ToList();
                Db.RemoveRange(quotationsForQR);
                Db.Remove(qr);
                return qr;
            }
            catch(Exception ex) {
                return null;
            }

        }
    }
}
