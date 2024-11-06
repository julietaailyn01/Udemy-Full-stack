import { Avatar, Box, Button, HStack, Text } from "@chakra-ui/react";
import { useSession } from "@/context/SessionContext";
import { useRouter } from "next/router";
import avatar from "../../public/avatarEgresado.avif";

const Header = () => {
  const router = useRouter();
  const { setUser } = useSession();

  const cerrarSesion = () => {
    setUser(null);
    router.push("/");
  };

  return (
    <Box
      as="nav"
      bgGradient="linear(to-r, teal, blue)"
      color="white"
      boxShadow="lg"
      padding={4}
      borderRadius="md"
      mb={8}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      maxH="10%"
    >
      <HStack h="100%" spacing={23}>
        <Avatar
          maxW="7%"
          overflow="hidden"
          size="xs"
          name="Avatar"
          src={avatar.src}
          borderRadius="full"
        />
        <Button
          variant="ghost"
          _hover={{ bg: "blue.600" }}
          onClick={() => router.push("/dashboard")}
        >
          Listado
        </Button>
        <Button
          variant="ghost"
          _hover={{ bg: "blue.600" }}
          onClick={() => router.push("/student/new")}
        >
          Nuevo
        </Button>
      </HStack>
      <Button
        variant="solid"
        mr={23}
        colorScheme="red"
        onClick={cerrarSesion}
        _hover={{ bg: "red.600" }}
      >
        Cerrar sesión
      </Button>
    </Box>
  );
};

export default Header;
