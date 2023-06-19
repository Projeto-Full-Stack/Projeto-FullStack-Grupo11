import { Inter } from "next/font/google";
import { useState } from "react";
import { Footer } from "@/components/footer";
import Announcements from "./announcement";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showFilter, setAside] = useState("hidden");

  function showAside() {
    showFilter != "hidden" ? setAside("hidden") : setAside("block");
  }

  return (
    <>
      <Announcements />
      <Footer />
    </>
  );
}
