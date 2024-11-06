import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { SessionProvider } from "@/context/SessionContext";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <ChakraProvider theme={ThemeProvider}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
