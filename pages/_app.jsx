import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import MainLayout from "../components/layouts/main";
import Calculation from "../library/calculation";
import Fonts from "../components/fonts";
import theme from "../theme";
import * as ga from "../library/google-analytics";
import Dialog from "../library/dialog.context";
import CookiesConsent from "../components/cookies-consent";

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
    <>
    <CookiesConsent/>
    <ChakraProvider theme={theme}>
      <Fonts />
      <Dialog>
        <MainLayout router={router}>
          <Calculation>
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
          </Calculation>
        </MainLayout>
      </Dialog>
    </ChakraProvider>
    </>
  );
}

export default MyApp;
