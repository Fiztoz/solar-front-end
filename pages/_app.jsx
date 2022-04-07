import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import MainLayout from "../components/layouts/main";
import Fonts from "../components/fonts";
import theme from "../theme";
import * as ga from "../library/google-analytics";

function MyApp({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <MainLayout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          {getLayout(<Component {...pageProps} key={router.route} />)}
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
