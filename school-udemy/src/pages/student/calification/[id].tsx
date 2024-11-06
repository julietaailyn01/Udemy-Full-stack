import Header from "@/Components/Header";
import {
  Calificacion,
  useDeleteApiEliminarCalificacion,
  useGetApiCalificaciones,
  usePostApiNuevaCalificacion,
} from "@/generated-sources/api";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useState } from "react";

const Calification = () => {
  const { id } = useParams<{ id: string }>();
  const toast = useToast();
  const [calificacionForm, setCalificacionForm] = useState<Calificacion>({
    descripcion: "",
    nota: 0,
    porcentaje: 0,
    matriculaId: Number(id),
  });

  const { data, isLoading, refetch } = useGetApiCalificaciones({
    idMatricula: Number(id),
  });
  const { mutate } = usePostApiNuevaCalificacion({
    mutation: {
      onSuccess: () => {
        toast({
          title: "Calificación guardada.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        refetch();
        setCalificacionForm({ descripcion: "", nota: 0, porcentaje: 0 });
      },
      onError: (error: any) => {
        toast({
          title: "Error al guardar.",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    },
  });

  const { mutate: eliminar } = useDeleteApiEliminarCalificacion({
    mutation: {
      onSuccess: () => {
        toast({
          title: "Calificación eliminada.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        refetch();
      },
      onError: (error: any) => {
        toast({
          title: "Error al eliminar.",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      },
    },
  });

  const handleDelete = (id: number | undefined) => {
    if (
      window.confirm("¿Estás seguro de que deseas eliminar esta calificación?")
    ) {
      eliminar({ params: { id: id } });
    }
  };

  let total = 0;
  data?.forEach((calificacion) => {
    if (calificacion.nota && calificacion.porcentaje) {
      total += calificacion.nota * (calificacion.porcentaje / 100);
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCalificacionForm((prev) => ({
      ...prev,
      [id]: id === "nota" || id === "porcentaje" ? Number(value) : value,
    }));
  };

  const handleSaveCalificacion = () => {
    mutate({ data: calificacionForm });
  };

  if (isLoading)
    return (
      <Center h="100vh">
        <Spinner size="lg" color="blue" />
      </Center>
    );

  return (
    <Box>
      <Header />
      <Box p={6} borderRadius="md" maxW="90%" mx="auto" justifyItems="center">
        <Heading
          fontSize="x-large"
          fontWeight="bold"
          mb={6}
          textAlign="center"
          mt={20}
        >
          Calificaciones
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
            <Thead bg="teal">
              <Tr>
                <Th color="white" py={6}>
                  Descripción
                </Th>
                <Th color="white">Calificación</Th>
                <Th color="white">Porcentaje</Th>
                <Th color="white"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data && data.length > 0 ? (
                data.map((calificacion) => (
                  <Tr key={calificacion.id}>
                    <Td p={8}>{calificacion.descripcion}</Td>
                    <Td>{calificacion.nota}</Td>
                    <Td>{calificacion.porcentaje}%</Td>
                    <Td>
                      <Button
                        size="sm"
                        colorScheme="red"
                        onClick={() => handleDelete(calificacion.id)}
                      >
                        Eliminar
                      </Button>
                    </Td>
                  </Tr>
                ))
              ) : (
                <Tr>
                  <Td colSpan={4} textAlign="center">
                    No hay calificaciones.
                  </Td>
                </Tr>
              )}
              <Tr>
                <Td p={8}>
                  <FormControl>
                    <Input
                      w="95%"
                      p={2}
                      pl={6}
                      borderRadius={8}
                      border="1px solid #A4A4A4"
                      type="text"
                      id="descripcion"
                      placeholder="Descripción"
                      value={calificacionForm.descripcion || ""}
                      onChange={handleInputChange}
                      size="sm"
                    />
                  </FormControl>
                </Td>
                <Td>
                  <FormControl>
                    <Input
                      type="number"
                      w="95%"
                      p={2}
                      pl={6}
                      borderRadius={8}
                      border="1px solid #A4A4A4"
                      id="nota"
                      placeholder="Calificación"
                      value={calificacionForm.nota}
                      onChange={handleInputChange}
                      size="sm"
                    />
                  </FormControl>
                </Td>
                <Td>
                  <FormControl>
                    <Input
                      type="number"
                      w="95%"
                      p={2}
                      pl={6}
                      borderRadius={8}
                      border="1px solid #A4A4A4"
                      id="porcentaje"
                      placeholder="Porcentaje"
                      value={calificacionForm.porcentaje}
                      onChange={handleInputChange}
                      size="sm"
                    />
                  </FormControl>
                </Td>
                <Td>
                  <Button
                    size="sm"
                    colorScheme="teal"
                    onClick={handleSaveCalificacion}
                  >
                    Guardar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <Heading fontSize="md" mt={8} textAlign="center">
          Nota final: {total.toFixed(2)}
        </Heading>
      </Box>
    </Box>
  );
};

export default Calification;
