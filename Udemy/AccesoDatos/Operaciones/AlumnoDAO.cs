using AccesoDatos.Context;
using AccesoDatos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccesoDatos.Operaciones
{
    public class AlumnoDAO
    {
        public ProyectoContext context = new ProyectoContext();

        public List<Alumno> seleccionarTodos()
        {
            var alumnos = context.Alumnos.ToList<Alumno>();
            return alumnos;
        }

        public Alumno seleccionar(int id)
        {
            var alumno = context.Alumnos.Where(a => a.Id == id).FirstOrDefault();
            return alumno;
        }

        public Alumno seleccionarporDni(string dni)
        {
            var alumno = context.Alumnos.Where(a => a.Dni.Equals(dni)).FirstOrDefault();
            return alumno;
        }

        public bool insertar(string dni, string nombre, string direccion, int edad, string email)
        {
            try
            {
                Alumno alumno = new Alumno();
                alumno.Dni = dni;
                alumno.Nombre = nombre;
                alumno.Direccion = direccion;
                alumno.Edad = edad;
                alumno.Email = email;

                context.Alumnos.Add(alumno);
                context.SaveChanges();
                return true;
            }catch (Exception ex)
            {
                return false;
            }
        }

        public bool actualizar(int id, string dni, string nombre, string direccion, int edad, string email)
        {
            try
            {
                var alumno = seleccionar(id);
                if (alumno == null) 
                {
                    return false;
                }
                else
                {
                    alumno.Dni = dni;
                    alumno.Nombre = nombre;
                    alumno.Direccion= direccion;
                    alumno.Edad = edad;
                    alumno.Email = email;

                    context.SaveChanges() ;

                    return true;
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool eliminar(int id)
        {
            try
            {
                var alumno = seleccionar(id);
                if (alumno == null)
                {
                    return false;
                }
                else
                {
                    context.Alumnos.Remove(alumno);
                    context.SaveChanges();
                    return true;
                }

            } catch (Exception ex)
            {
                return false;
            }
        }

        public List<AlumnoAsignatura> seleccionarAlumnosAsignaturas()
        {
            var query = from a in context.Alumnos
                        join m in context.Matriculas on a.Id equals m.AlumnoId
                        join asig in context.Asignaturas on m.AsignaturaId equals asig.Id
                        select new AlumnoAsignatura
                        {
                            NombreAlumno = a.Nombre,
                            NombreAsignatura = asig.Nombre
                        };
            return query.ToList();
        } 

        public List<AlumnoProfesor> seleccionarAlumnoProfesor(string usuario)
        {
            var query = from a in context.Alumnos
                        join m in context.Matriculas on a.Id equals m.AlumnoId
                        join asig in context.Asignaturas on m.AsignaturaId equals asig.Id
                        where asig.Profesor == usuario
                        select new AlumnoProfesor
                        {
                            Id = a.Id,
                            Dni = a.Dni,
                            Direccion = a.Direccion,
                            Edad = a.Edad,
                            Email = a.Email,
                            Asignatura = asig.Nombre,
                            Nombre = a.Nombre,
                            MatriculaId = m.Id
                        };

                        return query.ToList();
        }

        public bool insertarYMatricular(string dni, string nombre, string direccion, int edad, string email, int id_asig )
        {
            try
            {
                var existe = seleccionarporDni(dni);
                if (existe == null)
                {
                    insertar(dni, nombre, direccion, edad, email);
                    var insertado = seleccionarporDni(dni);
                    Matricula m = new Matricula();
                    m.AlumnoId = insertado.Id;
                    m.AsignaturaId = id_asig;
                    context.Matriculas.Add(m);
                    context.SaveChanges();

                }
                else
                {
                    Matricula m = new Matricula();
                    m.AlumnoId = existe.Id;
                    m.AsignaturaId = id_asig;
                    context.Matriculas.Add(m);
                    context.SaveChanges();

                }
                return true;
            }
            catch( Exception ex )
            {
                return false;
            }
        }

        public bool eliminarAlumno(int id)
        {
            try
            {
                var alumno = context.Alumnos.Where(a => a.Id == id).FirstOrDefault();
                if (alumno != null)
                {
                    var matriculas = context.Matriculas.Where(m => m.AlumnoId == id);

                    foreach (Matricula m in matriculas)
                    {
                        var calificaciones = context.Calificacions.Where(c => c.MatriculaId == m.Id);
                        context.Calificacions.RemoveRange(calificaciones);
                    }

                    context.Matriculas.RemoveRange(matriculas);
                    context.Alumnos.Remove(alumno);
                    context.SaveChanges();

                    return true;
                }
                else
                {
                    return false;
                }

                
            }catch(Exception ex)
            {
                return false;
            }
        }

    }
}
