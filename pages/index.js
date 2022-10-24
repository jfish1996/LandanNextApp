import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
const BaseURL = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") {
      router.push("/home");
    }
  }, []);
  return (
    <Head>
      <link rel="apple-touch-icon" href="/"></link>
      <title>{"Landy Pandyy"}</title>
    </Head>
  );
};
export default BaseURL;
