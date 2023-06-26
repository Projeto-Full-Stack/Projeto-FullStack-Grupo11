import Button from "@/components/button";
import Card from "@/components/card";
import { Footer } from "@/components/footer";
import EditAddressForm from "@/components/forms/formAddressEdit";
import EditUserForm from "@/components/forms/formUserEdit";
import NavBar from "@/components/navbar";
import Next from "@/components/next";
import Profile from "@/components/profile";
import { Heading } from "@/components/typography/heading.component";
import { Text } from "@/components/typography/text.component";
import { ModalContext } from "@/context/modal.context";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useContext } from "react";
import { loginContext } from "@/context/login.context";

const inter = Inter({ subsets: ["latin"] });

const ViewUser = () => {
  const router = useRouter();
  const { userInfo } = LoginContext();

  const { setModalContent } = useContext(ModalContext);

  return (
    <div>
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
              <div className="mt-2 flex gap-4">
                <Button
                  type="bg-brand"
                  click_event={() => setModalContent(<EditUserForm />)}
                >
                  Editar Perfil
                </Button>

                <Button
                  type="bg-brand"
                  click_event={() => setModalContent(<EditAddressForm />)}
                >
                  Editar Endereço
                </Button>
              </div>
            </Profile>
          </section>
          <Heading
            type="h5"
            weight={600}
            extra_classes="text-grey_0 mt-10 mb-11 px-4"
          >
            Anúncios
          </Heading>
          <ul className="flex gap-4 overflow-scroll md:[613px] md:overflow-hidden md:flex-wrap md:justify-center ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
          <Next />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default ViewUser;
function LoginContext(): { userInfo: any } {
  throw new Error("Function not implemented.");
}
