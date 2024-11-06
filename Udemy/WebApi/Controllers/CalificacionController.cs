using AccesoDatos.Models;
using AccesoDatos.Operaciones;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class CalificacionController : ControllerBase
    {
        private CalificacionDAO calificacionDAO = new CalificacionDAO();

        [HttpGet("calificaciones")]
        public List<Calificacion> obtenerCalificaciones(int idMatricula)
        {
            return calificacionDAO.seleccionar(idMatricula);
        }

        [HttpPost("nuevaCalificacion")]

        public bool nuevaCalificacion([FromBody] Calificacion calif)
        {
            return calificacionDAO.agregarCalificacion(calif);
        }

        [HttpDelete("eliminarCalificacion")]

        public bool eliminarCalificacion(int id)
        {
            return calificacionDAO.eliminarCalificacion(id);
        }
    }
}
