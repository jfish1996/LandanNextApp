import React, { useEffect } from "react";
import { useRouter } from "next/router";
const BaseURL = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") {
      router.push("/home");
    }
  }, []);
  return <></>;
};
export default BaseURL;
