import Header from "@/Components/Header";
import { Alumno, usePostApiAlumnoAsignatura } from "@/generated-sources/api";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";

type NewStudentFormData = Alumno & { asignatura: string };

const NewStudent = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewStudentFormData>();

  const { mutate } = usePostApiAlumnoAsignatura({
    mutation: {
      onSuccess: () => {
        router.push("/dashboard");
      },
      onError: (error) => {
        console.error("Error al guardar el alumno:", error);
      },
    },
  });

  const onSubmit = (data: NewStudentFormData) => {
    const id_asig = parseInt(data.asignatura, 10);
    mutate({
      data: { ...data },
      params: { id_asig },
    });
  };

  return (
    <>
      <Header />
      <Box
        maxW="600px"
        mx="auto"
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="lg"
      >
        <Heading fontSize="x-large" fontWeight="bold" mb={6} textAlign="center">
          Nuevo Estudiante
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            spacing={16}
            backgroundColor="#FAFAFA"
            p={16}
            m={16}
            mt={32}
            borderRadius={21}
            boxShadow="md"
            border="1px solid #E6E6E6"
            alignSelf="center"
          >
            <FormControl isInvalid={!!errors.nombre}>
              <FormLabel fontSize={12}>Nombre</FormLabel>
              <Input
                type="text"
                p={2}
                pl={6}
                w="100%"
                borderRadius={8}
                border="1px solid #A4A4A4"
                placeholder="Nombre del estudiante"
                {...register("nombre", {
                  required: "Este campo es obligatorio",
                })}
              />
              <FormErrorMessage>{errors.nombre?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.edad}>
              <FormLabel fontSize={12}>Edad</FormLabel>
              <Input
                type="number"
                p={2}
                pl={6}
                w="100%"
                borderRadius={8}
                border="1px solid #A4A4A4"
                placeholder="Edad del estudiante"
                {...register("edad", {
                  required: "Este campo es obligatorio",
                })}
              />
              <FormErrorMessage>{errors.edad?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.dni}>
              <FormLabel fontSize={12}>DNI</FormLabel>
              <Input
                type="text"
                p={2}
                pl={6}
                w="100%"
                borderRadius={8}
                border="1px solid #A4A4A4"
                placeholder="DNI del estudiante"
                {...register("dni", {
                  required: "Este campo es obligatorio",
                })}
              />
              <FormErrorMessage>{errors.dni?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.direccion}>
              <FormLabel fontSize={12}>Dirección</FormLabel>
              <Input
                type="text"
                p={2}
                pl={6}
                w="100%"
                borderRadius={8}
                border="1px solid #A4A4A4"
                placeholder="Dirección"
                {...register("direccion", {
                  required: "Este campo es obligatorio",
                })}
              />
              <FormErrorMessage>{errors.direccion?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.email}>
              <FormLabel fontSize={12}>Email</FormLabel>
              <Input
                type="email"
                p={2}
                pl={6}
                w="100%"
                borderRadius={8}
                border="1px solid #A4A4A4"
                placeholder="Correo electrónico"
                {...register("email", {
                  required: "Este campo es obligatorio",
                })}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.asignatura}>
              <FormLabel fontSize={12}>Asignatura</FormLabel>
              <Select
                p={2}
                pl={6}
                w="100%"
                borderRadius={8}
                border="1px solid #A4A4A4"
                placeholder="Selecciona una asignatura"
                {...register("asignatura", {
                  required: "Este campo es obligatorio",
                })}
              >
                <option value="1">Matemáticas</option>
                <option value="2">Informática</option>
                <option value="3">Inglés</option>
                <option value="4">Lengua</option>
              </Select>
              <FormErrorMessage>{errors.asignatura?.message}</FormErrorMessage>
            </FormControl>

            <Box display="flex" justifyContent="center" w="100%">
              <Button
                type="submit"
                backgroundColor="teal"
                color="white"
                mt={4}
                p={6}
                borderRadius={8}
              >
                Guardar
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default NewStudent;
