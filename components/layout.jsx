import React from "react";
import Head from "next/head";
import { ThemeProvider, useMediaQuery } from "@material-ui/core";
import Navbar from "./navbar-phone";
import NavWideScreen from "./navbar";
import { useTheme } from "@material-ui/styles";
import { useRouter } from "next/router";
import Footer from "./footer";
function Layout({ children }) {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const route = useRouter();
  return (
    <>
      <Head>
        {/* -----------  BOOTSTRAP---------- */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossorigin="anonymous"
        ></link>
        {/* -----------GOOGLE FONTS-------------- */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div style={{ minHeight: "800px" }}>
        {route.pathname !== "/" &&
        route.pathname !== "/login" &&
        route.pathname !== "/signup" ? (
          mdUp ? (
            <NavWideScreen />
          ) : (
            <Navbar />
          )
        ) : (
          ""
        )}

        {children}
      </div>
      {route.pathname !== "/" &&
      route.pathname !== "/login" &&
      route.pathname !== "/signup" ? (
        <Footer />
      ) : (
        ""
      )}
      {/* BOOTSTRAP SCRIPTS */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"
      ></script>
    </>
  );
}

export default Layout;
