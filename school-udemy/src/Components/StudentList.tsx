import {
  Box,
  Button,
  Center,
  Heading,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useSession } from "@/context/SessionContext";
import {
  useGetApiAlumnosProfesor,
  useDeleteApiEliminarAlumno,
} from "@/generated-sources/api";
import { useRouter } from "next/router";

const StudentList = () => {
  const { user } = useSession();
  const router = useRouter();
  const toast = useToast();

  const { data, isLoading, error, refetch } = useGetApiAlumnosProfesor({
    usuario: user?.usuario || "",
  });

  const { mutate: deleteAlumno } = useDeleteApiEliminarAlumno({
    mutation: {
      onSuccess: () => {
        toast({
          title: "Alumno eliminado.",
          description: "El alumno fue eliminado correctamente.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        refetch();
      },
      onError: () => {
        toast({
          title: "Error",
          description: "No se pudo eliminar el alumno.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    },
  });

  const handleDelete = (id: number | undefined) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este alumno?")) {
      deleteAlumno({ params: { id: id } });
    }
  };

  if (isLoading)
    return (
      <Center h="100vh">
        <Spinner size="lg" color="blue" />
      </Center>
    );
  if (error) return <Text color="red">Error al cargar los estudiantes.</Text>;

  return (
    <Box p={6} borderRadius="md" maxW="90%" mx="auto" justifyItems="center">
      <Heading fontSize="x-large" fontWeight="bold" mb={6} textAlign="center">
        Lista de Estudiantes
      </Heading>
      <Box
        w="95%"
        mt={30}
        bg="#FAFAFA"
        borderRadius={16}
        overflow="hidden"
        mx="auto"
      >
        <Table w="100%" variant="simple" bg="#FAFAFA">
          <Thead>
            <Tr bg="teal" borderTopRadius={16}>
              <Th color="white" py={6}>
                Nombre
              </Th>
              <Th color="white">Edad</Th>
              <Th color="white">DNI</Th>
              <Th color="white">Dirección</Th>
              <Th color="white">Email</Th>
              <Th color="white">Asignatura</Th>
              <Th color="white"></Th>
              <Th color="white"></Th>
              <Th color="white"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data && data.length > 0 ? (
              data.map((alumno) => (
                <Tr key={alumno.id}>
                  <Td p={8}>{alumno.nombre}</Td>
                  <Td>{alumno.edad}</Td>
                  <Td>{alumno.dni}</Td>
                  <Td>{alumno.direccion}</Td>
                  <Td>{alumno.email}</Td>
                  <Td>{alumno.asignatura}</Td>
                  <Td>
                    <Button
                      size="sm"
                      onClick={() => router.push(`/student/${alumno.id}`)}
                      mr={2}
                      _hover={{ bg: "teal", color: "white" }}
                      p={6}
                      borderRadius={8}
                    >
                      Editar
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      size="sm"
                      p={6}
                      borderRadius={8}
                      _hover={{ bg: "teal", color: "white" }}
                      onClick={() =>
                        router.push(
                          `/student/calification/${alumno.matriculaId}`
                        )
                      }
                      mr={2}
                    >
                      Calificar
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      size="sm"
                      p={6}
                      borderRadius={8}
                      _hover={{ bg: "teal", color: "white" }}
                      onClick={() => handleDelete(alumno.id)}
                    >
                      Eliminar
                    </Button>
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={7} textAlign="center">
                  No hay estudiantes.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default StudentList;
