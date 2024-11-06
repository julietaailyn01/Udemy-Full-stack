using AccesoDatos.Models;
using AccesoDatos.Operaciones;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class AlumnosController : ControllerBase
    {
        private AlumnoDAO alumno = new AlumnoDAO();

        [HttpGet("alumnosProfesor")]
        public List<AlumnoProfesor> alumnoProfesor(string usuario)
        {
            return alumno.seleccionarAlumnoProfesor(usuario);
        }

        [HttpGet("alumno")]

        public Alumno getAlumno (int id)
        {
            return alumno.seleccionar(id);
        }

        [HttpPut("alumnoPut")]

        public bool actualizarAlumnos([FromBody] Alumno alum)
        {
            return alumno.actualizar(alum.Id, alum.Dni, alum.Nombre, alum.Direccion, alum.Edad, alum.Email);

        }

        [HttpPost("nuevoAlumno")]

        public bool nuevoAlumno([FromBody] Alumno alum)
        {
            return alumno.insertar(alum.Dni, alum.Nombre, alum.Direccion, alum.Edad, alum.Email);
        }

        [HttpPost("alumnoAsignatura")]

        public bool nuevoAlumnoAsignatura([FromBody] Alumno alum, int id_asig)
        {
            return alumno.insertarYMatricular(alum.Dni, alum.Nombre, alum.Direccion, alum.Edad, alum.Email, id_asig);

        }

        [HttpDelete("eliminarAlumno")]
        public bool eliminarAlumno(int id)
        {
            return alumno.eliminarAlumno(id);
        }
    }
}
