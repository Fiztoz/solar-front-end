import Head from "next/head";
import React, { useState, useEffect, useRef, createContext } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./navigation/navbar";
import Footer from "./footer/footer";
import useWindowDimensions from "../../library/window-dimensions";
import route from "../route";

export default function MainLayout({ children, router }) {
  const [navH, setNavH] = useState(0);
  const [bodyH, setBodyH] = useState(0);
  const [footerH, setFooterH] = useState(0);

  const navRef = useRef();
  const bodyRef = useRef();
  const footerRef = useRef();

  const { width: wW, height: wH } = useWindowDimensions();

  const routePath = route();

  useEffect(() => {
    if (navRef?.current?.clientHeight) {
      setNavH(navRef.current.clientHeight);
    }
  });
  useEffect(() => {
    if (bodyRef?.current?.clientHeight) {
      setBodyH(bodyRef.current.clientHeight);
    }
  });
  useEffect(() => {
    if (footerRef?.current?.clientHeight) {
      setFooterH(footerRef.current.clientHeight);
    }
  });

  const minBodyHeight = () => {
    return wH;
  };

  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Solar Rooftop" />
        <meta name="author" content="การไฟฟ้าส่วนภูมิภาค" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Solar Hero - PEA" />
        <meta property="og:type" content="website" />
        <title>Solar Hero</title>
      </Head>
      <Navbar ref={navRef} path={router.asPath} />
      <Box minH={minBodyHeight()} ref={bodyRef} w="100%" pt={`66px`}>
        {children}
      </Box>
      <Footer ref={footerRef} path={router.asPath} />
    </Box>
  );
}
