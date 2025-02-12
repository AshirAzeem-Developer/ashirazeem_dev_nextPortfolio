import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);
  return <h1>Hello this is next app</h1>;
}
