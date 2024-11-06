// See https://aka.ms/new-console-template for more information

using AccesoDatos.Operaciones;

AlumnoDAO opAlumno = new AlumnoDAO();

opAlumno.eliminar(11);

var alumnos = opAlumno.seleccionarTodos();



foreach ( var alum in alumnos)
{
    Console.WriteLine(alum.Nombre);
    Console.WriteLine(alum.Id);
}
Console.WriteLine("######################");

var alumno = opAlumno.seleccionar(1);
if( alumno == null)
{
    Console.WriteLine("El alumno con el id seleccionado no existe.");
}
else
{
    Console.WriteLine("El alumno con el id = 1 es: " + alumno.Nombre);
}

Console.WriteLine("######################");

var alumsig = opAlumno.seleccionarAlumnosAsignaturas();

foreach(var alasig in alumsig)
{
    Console.WriteLine(alasig.NombreAlumno + " -> " + alasig.NombreAsignatura);
}

