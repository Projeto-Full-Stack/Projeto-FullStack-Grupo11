import { Inter } from "next/font/google";
import { useState } from 'react'
import { Text } from '@/components/typography/text.components';
import { Heading } from '@/components/typography/heading.component';
import { Footer } from '@/components/footer';        
import Input from "@/components/input";
import NavBar from '@/components/navbar';
import Button from '@/components/button';
import Card from '@/components/card';
import Announcements from "./announcement";
import RegisterPage from "./register";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showFilter, setAside] = useState("hidden")

  function showAside (){
    showFilter != "hidden" ? setAside("hidden") : setAside("block")
  }

  return (
    <>
      <RegisterPage/>
      <Footer />
    </>
  )
}
