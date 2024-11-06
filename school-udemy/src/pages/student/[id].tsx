import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Heading,
  Stack,
  Spinner,
  Center,
  useToast,
} from "@chakra-ui/react";
import {
  Alumno,
  useGetApiAlumno,
  usePutApiAlumnoPut,
} from "@/generated-sources/api";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Header from "@/Components/Header";

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;
  const toast = useToast();

  const { data, isLoading, error } = useGetApiAlumno({ id: Number(id) });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Alumno>();

  useEffect(() => {
    if (data) {
      setValue("nombre", data.nombre);
      setValue("edad", data.edad);
      setValue("dni", data.dni);
      setValue("direccion", data.direccion);
      setValue("email", data.email);
      setValue("matriculas", data.matriculas);
    }
  }, [data, setValue]);

  const { mutate } = usePutApiAlumnoPut({
    mutation: {
      onSuccess: () => {
        toast({
          title: "Alumno actualizado",
          description: "Los datos del alumno se han guardado correctamente.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.push("/dashboard");
      },
      onError: (error) => {
        console.error("Error al guardar el alumno:", error);
      },
    },
  });

  const onSubmit = (formData: Alumno) => {
    mutate({ data: { ...formData, id: Number(id) } });
  };

  if (isLoading)
    return (
      <Center minH="100vh">
        <Spinner size="lg" color="blue.500" />
      </Center>
    );

  if (error)
    return (
      <Center minH="100vh">
        <Heading size="md" color="red.500">
          Error al cargar datos del alumno
        </Heading>
      </Center>
    );

  return (
    <>
      <Header />
      <Box
        maxW="600px"
        mx="auto"
        p={6}
        borderRadius="md"
        boxShadow="lg"
        alignContent="center"
      >
        <Heading fontSize="x-large" fontWeight="bold" mb={6} textAlign="center">
          Editar Alumno
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
              <FormLabel htmlFor="nombre" fontSize={12}>
                Nombre
              </FormLabel>
              <Input
                type="text"
                id="nombre"
                p={2}
                pl={6}
                w="100%"
                borderRadius={8}
                border="1px solid #A4A4A4"
                placeholder="Nombre del alumno"
                {...register("nombre", {
                  required: "Este campo es obligatorio",
                })}
              />
              <FormErrorMessage>
                {errors.nombre && errors.nombre.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.edad}>
              <FormLabel fontSize={12} htmlFor="edad">
                Edad
              </FormLabel>
              <Input
                type="number"
                id="edad"
                p={2}
                pl={6}
                w="100%"
                borderRadius={8}
                border="1px solid #A4A4A4"
                placeholder="Edad"
                {...register("edad", { required: "Este campo es obligatorio" })}
              />
              <FormErrorMessage>
                {errors.edad && errors.edad.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.dni}>
              <FormLabel htmlFor="dni" fontSize={12}>
                DNI
              </FormLabel>
              <Input
                type="text"
                id="dni"
                p={2}
                pl={6}
                w="100%"
                borderRadius={8}
                border="1px solid #A4A4A4"
                placeholder="DNI"
                {...register("dni", { required: "Este campo es obligatorio" })}
              />
              <FormErrorMessage>
                {errors.dni && errors.dni.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.direccion}>
              <FormLabel htmlFor="direccion" fontSize={12}>
                Dirección
              </FormLabel>
              <Input
                type="text"
                id="direccion"
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
              <FormErrorMessage>
                {errors.direccion && errors.direccion.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.email}>
              <FormLabel htmlFor="email" fontSize={12}>
                Email
              </FormLabel>
              <Input
                type="email"
                id="email"
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
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
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

export default Edit;
