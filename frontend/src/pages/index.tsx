import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";
import Input from "@/components/input";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavBar/>
      <main>
        <Input placeholder={"placeholder"} htmlFor={"email"} type={"email"} label={"label"}/>
      </main>
    </div>
    
  );
}
