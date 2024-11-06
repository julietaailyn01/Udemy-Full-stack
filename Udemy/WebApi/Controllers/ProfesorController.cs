using AccesoDatos.Models;
using AccesoDatos.Operaciones;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class ProfesorController : ControllerBase
    {
        public ProfesorDAO profesorDAO = new ProfesorDAO();

        [HttpPost("autenticacion")]

        public Profesor login([FromBody] Profesor prof)
        {
            var profe = profesorDAO.login(prof.Usuario, prof.Pass);

            if (profe != null)
            {
                return profe;
            }
            else
            {
                return null;
            }

        }
    }
}
