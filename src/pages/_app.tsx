import { useEffect, useState } from "react";
import Head from "next/head"; // Import Head for favicon
import { AppProps } from "next/app";
import { useRouter } from "next/router";

import AppLayout from "../components/layouts/AppLayout";
import AuthLayout from "../components/layouts/AuthLayout";

import "../styles/globals.css";

const NullLayout = ({ children }: any) => <>{children}</>;

function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || NullLayout;
  return (
    <>
      <Head>
        {/* Add Favicon */}
        <link rel="icon" href="/favicon1.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
