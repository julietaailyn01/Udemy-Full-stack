// components/Login.tsx
import { Form, useForm } from "react-hook-form";
import { usePostApiAutenticacion } from "@/generated-sources/api";
import { UserData, useSession } from "@/context/SessionContext";
import { useRouter } from "next/router";
import { Avatar, Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import avatar from "../../public/avatarEgresado.avif";

type LoginData = {
  usuario: string;
  pass: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();
  const router = useRouter();
  const { setUser } = useSession();

  const { mutate } = usePostApiAutenticacion({
    mutation: {
      onSuccess: (data) => {
        setUser(data as UserData);
        router.push("/dashboard");
      },
      onError: (error) => {
        console.error("Error de login:", error);
      },
    },
  });

  const onSubmit = (data: LoginData) => mutate({ data });

  return (
    <Box
      justifyItems="center"
      bgGradient="linear(to-br, blue, purple)"
      alignContent="center"
      w="100%"
      minH="100vh"
    >
      <Box
        borderRadius="100%"
        w="fit-content"
        justifyItems="center"
        overflow="hidden"
        maxW="7%"
        zIndex={2}
        mb={-50}
      >
        <Avatar size="xs" name="Avatar" src={avatar.src} borderRadius="full" />
      </Box>
      <Box
        p={4}
        border="1px solid"
        borderRadius={16}
        backgroundColor="rgba(255, 255, 255, 0.7)"
        borderColor="gray"
        minW="40%"
        textAlign="center"
      >
        <Text my={10} mt={50}>
          Iniciar sesión
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack p={16}>
            <Input
              p={2}
              border="1px solid"
              borderRadius={8}
              type="text"
              placeholder="Usuario"
              {...register("usuario", { required: true })}
            />
            {errors.usuario && <span>Este campo es obligatorio</span>}

            <Input
              type="password"
              placeholder="Contraseña"
              p={2}
              border="1px solid"
              borderRadius={8}
              {...register("pass", { required: true })}
            />
            {errors.pass && <span>Este campo es obligatorio</span>}
          </Stack>
          <Button
            type="submit"
            border="1px solid gray"
            borderRadius={8}
            backgroundColor="blue"
            color="white"
            justifySelf={"center"}
            w="25%"
            mb={10}
          >
            Iniciar
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
