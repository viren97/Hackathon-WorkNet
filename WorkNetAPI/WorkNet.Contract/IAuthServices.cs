using System.Threading.Tasks;
using WorkNet.Concern;

namespace WorkNet.Contract {
    public interface IAuthServices {
        string GenerateToken(string email);
        Task<AppUser> Register(RepRegister representative);
        Task<AppUser> Login(Auth auth);
    }
}
