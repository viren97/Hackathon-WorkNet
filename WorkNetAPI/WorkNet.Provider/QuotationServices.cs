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
                await Db.SaveChangesAsync();
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
                await Db.SaveChangesAsync();


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
                await Db.SaveChangesAsync();

                return qr;
            }
            catch(Exception ex) {
                return null;
            }

        }

        public async Task<Quotation> Create(Quotation qr, string userId) {
            try {
                var user = await UserManager.FindByIdAsync(userId);
                var executive = await Db.Executives.FirstOrDefaultAsync(e => e.Email == user.Email);

                qr.CompanyId = executive.CompanyId;

                await Db.AddAsync(qr);
                await Db.SaveChangesAsync();


                return qr;
            }
            catch (Exception ex) {
                return null;
            }

        }

        public async Task<Quotation> Update(Quotation qr, int id, string userId) {
            try {
                var dbQr = await Db.Quotations.FindAsync(id);

                dbQr.Description = qr.Description;
                dbQr.Budget = qr.Budget;
                dbQr.RelaventProjectIds = qr.RelaventProjectIds;

                Db.Update(dbQr);
                await Db.SaveChangesAsync();


                return dbQr;
            }
            catch (Exception ex) {
                return null;
            }
        }

        public async Task<Quotation> Delete(int id) {
            try {

                var dbQr = await Db.Quotations.FindAsync(id);
                Db.Remove(dbQr);
                await Db.SaveChangesAsync();


                return dbQr;

            }
            catch (Exception ex) {
                return null;
            }
        }

        public async Task<Quotation> GetById(int id) {
            try {
                return await Db.Quotations.FindAsync(id);

            }
            catch (Exception ex) {
                return null;
            }
        }

        public async Task<List<Quotation>> GetAll() {
            try {
                return await Db.Quotations.ToListAsync();
            }
            catch (Exception ex) {
                return null;
            }
        }
    }
}
