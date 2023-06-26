import { Inter } from "next/font/google";
import { useState } from "react";
import RegisterPage from "./register";
import Profile from "./profile/[id]";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showFilter, setAside] = useState("hidden");

  function showAside() {
    showFilter != "hidden" ? setAside("hidden") : setAside("block");
  }

  return (
    <>
      <Profile />
    </>
  );
}
