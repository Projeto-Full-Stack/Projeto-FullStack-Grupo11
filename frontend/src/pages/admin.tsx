import NavBar from "@/components/navbar";
import Profile from "@/components/profile";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { Text } from "@/components/typography/text.component";
import Button from "@/components/button";
import { JSX, useContext } from "react";
import { ModalContext } from "@/context/modal.context";
import { Heading } from "@/components/typography/heading.component";
import Card from "@/components/card";
import { Footer } from "@/components/footer";
import Next from "@/components/next";

const inter = Inter({ subsets: ["latin"] });

const Admin = () => {
  const router = useRouter();
  const { setModalContent } = useContext(ModalContext);

  return (
    <>
      <main className={"body"}>
        <NavBar />
        <div className="px-4 py-20 flex flex-col max-w-[2300px] m-auto">
          <section className="flex items-center w-full justify-center">
            <Profile
              type="big"
              name="Mayza"
              extra_classes="h-96 flex flex-col gap-y-4 bg-colors_color_white_fixed py-10 px-7 mb-8 max-w-[1240px] h-fit"
            >
              <Text type="b1" weight={400} extra_classes="text-grey_2 h-35">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s
              </Text>
              <div className="mt-2">
                <Button type="bg-brand">Criar anuncio</Button>
              </div>
            </Profile>
          </section>

          <ul className="flex gap-4 overflow-scroll md:[613px] md:overflow-hidden md:flex-wrap md:justify-center ">
            <Card type="complet" />
            <Card type="complet" />
            <Card type="complet" />
          </ul>
          <Next />
        </div>
        <Footer />
      </main>
    </>
  );
};
export default Admin;
